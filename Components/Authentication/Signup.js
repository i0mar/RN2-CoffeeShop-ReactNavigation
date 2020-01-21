import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

class Signup extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.authButton} onPress={() => this.props.navigation.navigate("CoffeeListScreen")}>
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.authOther} onPress={() => this.props.navigation.navigate("LoginScreen")}>Click here to log in!</Text>
      </View>
    );
  }
}

Signup.navigationOptions = {
  title: "Register"
};

export default Signup;
