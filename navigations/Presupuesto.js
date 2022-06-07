import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { PresupuestoScreen } from "../screen";

const AppPresupuesto = createStackNavigator({
  Home: {
    screen: PresupuestoScreen,
    navigationOptions: {
      title: "Presupuesto",
    },
  },
});

export default createAppContainer(AppPresupuesto);
