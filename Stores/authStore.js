import { decorate, observable } from "mobx";
import axios from "axios";
import instance from "./instance";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

class AuthStore {
    user = null;

    setUser = (token) => {
        if (token) {
            axios.defaults.headers.common.Authorization = `JWT ${token}`;
            const userObj = jwt_decode(token);
            this.user = userObj;
            AsyncStorage.setItem("token", token);
        } else {
            this.user = null;
            AsyncStorage.removeItem("token");
        }
    };

    login = async (userData, navigation) => {
        try {
            const res = await instance.post("login/", userData);
            this.setUser(res.data.token);
            navigation.navigate("StackNav");
        } catch (error) {
            console.error(error);
        }
    };

    signup = async (userData, navigation) => {
        try {
            await instance.post("register/", userData);
            this.login(userData, navigation);
        } catch (error) {
            console.error(error);
        }
    };

    logout = () => {
        this.setUser();
    };

    checkForToken = async (navigation) => {
        const temp = await AsyncStorage.getItem("token");
        
        if (temp) {
            const now = new Date() / 1000;
            const userObj = jwt_decode(temp);

            console.log(now);
            console.log(userObj.exp);

            if (now <= userObj.exp) {
                this.setUser(temp);
                navigation.navigate("StackNav");
            }
        } else
            this.setUser();
    };
}

decorate(AuthStore, {
    user: observable
});

const authStore = new AuthStore();

export default authStore;