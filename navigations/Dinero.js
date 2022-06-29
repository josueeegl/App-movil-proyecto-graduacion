import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { DineroScreen } from "../screen";

const AppDinero = createStackNavigator({
  Home: {
    screen: DineroScreen,
    navigationOptions: {
      headerShown: false,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#7B7D7D",
      },
    },
  },
});

export default createAppContainer(AppDinero);
