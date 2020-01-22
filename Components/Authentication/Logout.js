import React, { Component } from "react";
import { Button, Text } from "native-base";

import authStore from "../../Stores/authStore";
import { withNavigation } from "react-navigation";

class Logout extends Component {
  render() {
    return (
        <Button full danger onPress={() => authStore.logout()}>
            <Text>Logout</Text>
        </Button>
    );
  }
}

export default withNavigation(Logout);
