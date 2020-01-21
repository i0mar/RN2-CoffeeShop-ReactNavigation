import React from "react";

// NativeBase Components
import { Button, Icon, Text } from "native-base";

import cartStore from "../../Stores/cartStore";
import { observer } from "mobx-react";

const HeaderComponent = ({ navigation }) => {
    return (
        <Button transparent onPress={() => navigation.navigate("CoffeeCartScreen")}>
            <Text>{cartStore.numOfItems}</Text>
            <Icon name="cart"/>
        </Button>
    );
};

export default observer(HeaderComponent);