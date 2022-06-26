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
        backgroundColor: "#ECF0F1",
      },
    },
  },
});

export default createAppContainer(AppInicio);
