import React from "react";
import { StatusBar } from "react-native";
import { color } from "react-native-reanimated";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { PresupuestoScreen, detallePresupuesto } from "../screen";

const AppPresupuesto = createStackNavigator(
  {
    Home: {
      screen: PresupuestoScreen,
      navigationOptions: {
        title: "Presupuesto",
        headerStyle: {
          backgroundColor: "#ECF0F1",
        },
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
