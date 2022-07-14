import React from "react";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "react-navigation-stack";

import { DineroScreen, DetalleDinero } from "../screen";
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
const AppDinero = createStackNavigator(
  {
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
    Detail: {
      screen: DetalleDinero,
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

export default createAppContainer(AppDinero);
