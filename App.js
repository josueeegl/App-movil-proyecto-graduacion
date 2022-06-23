import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen, RegisterScreen, AuthLoading } from "./screen";
import { AppNavegador } from "./iniciar";

const OnBoardingNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: { headerShown: false },
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: { headerShown: false },
    },
  },
  {
    initialRouteName: "Login",
  }
);

const BaseNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    OnBoarding: OnBoardingNavigator,
    Root: AppNavegador,
  },
  {
    initialRouteName: "AuthLoading",
  }
);
export default createAppContainer(BaseNavigator);
