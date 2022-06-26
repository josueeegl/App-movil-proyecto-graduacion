import React from "react";
import { StatusBar } from "react-native";
import { color } from "react-native-reanimated";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "react-navigation-stack";

import { PresupuestoScreen, detallePresupuesto } from "../screen";
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const AppPresupuesto = createStackNavigator(
  {
    Home: {
      screen: PresupuestoScreen,
      navigationOptions: {
        headerShown: false,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#7B7D7D",
        },
      },
    },
    Detalle: {
      screen: detallePresupuesto,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    mode: "modal",
    initialRouteName: "Home",
    defaultNavigationOptions: {
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      transitionSpec: {
        open: config,
        close: config,
      },
    },
  }
);

export default createAppContainer(AppPresupuesto);
