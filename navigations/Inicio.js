import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeScreen } from "../screen";

const AppInicio = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    mode: "modal",
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppInicio);
