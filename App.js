import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen, RegisterScreen } from "./screen";
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
    OnBoarding: OnBoardingNavigator,
    Root: AppNavegador,
  },
  {
    initialRouteName: "OnBoarding",
  }
);
export default createAppContainer(OnBoardingNavigator);
