import React, { Component } from "react";
import { Spinner, Header, Container } from "native-base";

// Components
import AppContainer from "./Navigation";

import coffeeStore from "./Stores/coffeeStore";
import { observer } from "mobx-react";

class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (coffeeStore.loading) {
      return <Spinner color="#132D4B" />;
    }
    return (
      <Container>
        <AppContainer />
      </Container>
    );
  }
}

export default observer(App);