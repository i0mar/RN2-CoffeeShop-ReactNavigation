import React from "react";

// NativeBase Components
import { List, Content, Button, Icon, Text } from "native-base";

// Store
// import coffeeshops from "./list";
import coffeeStore from "../../Stores/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import HeaderComponent from "../HeaderComponent";
import { observer } from "mobx-react";

const CoffeeList = ({ navigation }) => {
  const coffeeshopList = coffeeStore.coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id}/>
  ));

  return (
    <Content>
      {coffeeshopList}
    </Content>
  );
};

CoffeeList.navigationOptions = ({ navigation }) => {
  return {
    title: "Coffee List",
    headerRight: (
      <HeaderComponent navigation = {navigation} />
    )
  };
};

export default observer(CoffeeList);
