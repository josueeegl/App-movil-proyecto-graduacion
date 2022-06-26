import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeScreen } from "../screen";

const AppInicio = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Inicio",
      headerStyle: {
        backgroundColor: "#47474F",
      },
    },
  },
});

export default createAppContainer(AppInicio);
