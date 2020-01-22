import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Style
import styles from "./styles";

import coffeeStore from "../../Stores/coffeeStore";
import cartStore from "../../Stores/cartStore";


import HeaderComponent from "../HeaderComponent";
import { observer } from "mobx-react";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small",
    quantity: 1
  };

  changeDrink = value =>
    this.setState({
      drink: value
    });

  changeOption = value =>
    this.setState({
      option: value
    });

  render() {
    const coffeeshop = coffeeStore.coffeeshops.find(coffeeShop => coffeeShop.id == this.props.navigation.getParam("coffeeshopID"));
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {coffeeshop.name + "\n"}
                  <Text note>{coffeeshop.location}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{uri: coffeeshop.img}} />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeDrink}
                  placeholder="Choose Drink"
                >
                  <Picker.Item label="Cappuccino" value="Cappuccino" />
                  <Picker.Item label="Latte" value="Latte" />
                  <Picker.Item label="Espresso" value="Espresso" />
                </Picker>
              </Left>
              <Body>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeOption}
                  placeholder="Choose Option"
                >
                  <Picker.Item label="Small" value="Small" />
                  <Picker.Item label="Medium" value="Medium" />
                  <Picker.Item label="Large" value="Large" />
                </Picker>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={quantity => this.setState({ quantity })}
                  initValue={1}
                />
              </Body>

              <Right>
                <Button full style={styles.addButton} onPress={() => cartStore.addItemToCart(this.state, this.props.navigation)}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CoffeeDetail.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("coffeeshopName"),
    headerRight: (
      <HeaderComponent navigation = {navigation} />
    )
  };
};

export default observer(CoffeeDetail);
