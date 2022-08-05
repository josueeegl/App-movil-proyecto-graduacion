import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeScreen, HomeDetailScreen } from "../screen";

const AppInicio = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    HomeDetail: {
      screen: HomeDetailScreen,
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
