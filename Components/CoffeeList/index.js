import React from "react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";
import HeaderComponent from "../HeaderComponent";

const CoffeeList = ({ navigation }) => {
  const coffeeshopList = coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id}/>
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
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

export default CoffeeList;
