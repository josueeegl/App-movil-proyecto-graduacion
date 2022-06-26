import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { OPScreen } from "../screen";

const AppOpc = createStackNavigator({
  Home: {
    screen: OPScreen,
    navigationOptions: {
      title: "Opciones",
      headerStyle: {
        backgroundColor: "#ECF0F1",
      },
    },
  },
});

export default createAppContainer(AppOpc);