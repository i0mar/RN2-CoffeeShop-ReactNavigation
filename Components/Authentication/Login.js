import React, { Component } from "react";

// Styling Components
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";

import authStore from "../../Stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          name="username"
          onChangeText={username => this.setState({username})}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          name="password"
          onChangeText={password => this.setState({password})}
        />
        <TouchableOpacity style={styles.authButton} onPress={() => authStore.login(this.state, this.props.navigation)}>
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.authOther} onPress={() => this.props.navigation.navigate("SignupScreen")}>Click here to register!</Text>
      </View>
    );
  }
}

Login.navigationOptions = {
  title: "Log In"
};

export default Login;
