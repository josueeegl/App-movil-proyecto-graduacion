import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { DineroScreen } from "../screen";

const AppDinero = createStackNavigator({
  Home: {
    screen: DineroScreen,
    navigationOptions: {
      title: "Inicio",
      headerStyle: {
        backgroundColor: "#ECF0F1",
      },
    },
  },
});

export default createAppContainer(AppDinero);
