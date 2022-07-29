import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { GraficaScreen } from "../screen";

const AppGrafic = createStackNavigator({
  Home: {
    screen: GraficaScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppGrafic);
