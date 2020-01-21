import React from "react";

// NativeBase Components
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

const HeaderComponent = ({ navigation }) => {
    return (
        <Button transparent onPress={() => navigation.navigate("CoffeeCartScreen")}>
            <Icon name="cart"/>
        </Button>
    );
};

export default HeaderComponent;