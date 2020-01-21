import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeList from "../Components/CoffeeList/";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

import { createStackNavigator } from "react-navigation-stack";

const StackNav = createStackNavigator(
    {
        LoginScreen: Login,
        SignupScreen: Signup,
        CoffeeListScreen: CoffeeList,
        CoffeeDetailScreen: CoffeeDetail,
        CoffeeCartScreen: CoffeeCart
    },
    {
        initialRouteName: "LoginScreen",
        defaultNavigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "rgb(20,90,100)"
              },
            headerTitleStyle: {
            fontWeight: "bold"
            }
        }
    }
);

export default StackNav;