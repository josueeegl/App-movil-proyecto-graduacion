import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { PresupuestoScreen, detallePresupuesto } from "../screen";

const AppPresupuesto = createStackNavigator(
  {
    Home: {
      screen: PresupuestoScreen,
      navigationOptions: {
        title: "Presupuesto",
      },
    },
    Detalle: {
      screen: detallePresupuesto,
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppPresupuesto);
