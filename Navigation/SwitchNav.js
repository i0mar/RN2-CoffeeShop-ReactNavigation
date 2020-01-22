import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import StackNav from "./StackNav"

import { createSwitchNavigator } from "react-navigation";

const SwitchNav = createSwitchNavigator(
    {
        LoginScreen: Login,
        SignupScreen: Signup,
        StackNav: StackNav
    },
    {
        initialRouteName: "StackNav",
        defaultNavigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "rgb(20,90,100)"
              },
            headerTitleStyle: {
            fontWeight: "bold"
            }
        }
    }
);

export default SwitchNav;