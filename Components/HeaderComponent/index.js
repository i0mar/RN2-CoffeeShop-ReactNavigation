import React from "react";

// NativeBase Components
import { Button, Icon, Text } from "native-base";

import cartStore from "../../Stores/cartStore";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";
import { View } from "react-native";

const HeaderComponent = ({ navigation }) => {
    return (
        <View>
            {authStore.user && <Button transparent onPress={() => navigation.navigate("CoffeeCartScreen")}>
                <Text>{cartStore.numOfItems}</Text>
                <Icon name="cart"/>
            </Button>}

            {!authStore.user && <Button transparent onPress={() => navigation.navigate("LoginScreen")}>
                <Text>Log in</Text>
            </Button>}
        </View>
    );
};

export default observer(HeaderComponent);