import { decorate, observable, computed } from "mobx";

import authStore from "./authStore";
import React from "react";
import { Alert } from "react-native";

class CartStore {
    items = [];

    addItemToCart = (item, navigation) => {
        if (authStore.user) {
            const isItemThere = this.items.find(itm => itm.drink == item.drink && itm.option == item.option);

            if (!isItemThere)
                this.items.push(item);
            else
                isItemThere.quantity++;
        } else {
            Alert.alert(
                "Action Denied.",
                "You can not add item(s) without logging in.",
                [
                    {
                        text: "Log in",
                        onPress: () => navigation.navigate("LoginScreen")
                    },
                    {
                        text: "Cancel",
                    }
                ]
            )
        }
    };

    removeItemFromCart = (item) => {
        this.items.splice(this.items.indexOf(item), 1);
    };

    checkoutCart = () => {
        this.items = [];
        alert("Thank you for shopping with us!");
    };

    get numOfItems() {
        let temp = 0;
        this.items.forEach(item => temp += item.quantity);

        return temp;
    }
}

decorate(CartStore, {
    items: observable,
    numOfItems: computed
});

const cartStore = new CartStore();

export default cartStore;