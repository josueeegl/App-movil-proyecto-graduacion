import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { OPScreen } from "../screen";

const AppOpc = createStackNavigator({
  Home: {
    screen: OPScreen,
    navigationOptions: {
      title: "Opciones",
    },
  },
});

export default createAppContainer(AppOpc);