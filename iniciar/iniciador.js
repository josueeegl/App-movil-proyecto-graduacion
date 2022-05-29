import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  HomeScreen,
  PresupuestoScreen,
  DineroScreen,
  OPScreen,
} from "../screen";
import { Icono } from "../navigation-bar";

export const AppNavegador = createBottomTabNavigator(
  {
    Home: {
          screen: HomeScreen,
          navigationOptions: {
            title: "Inicio",
        }
    },
    Presupuesto: {
      screen: PresupuestoScreen,
    },
    Dinero: {
      screen: DineroScreen,
    },
    Opciones: {
      screen: OPScreen,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        return (
          <Icono
            routeName={routeName}
            focused={focused}
            tintColor={tintColor}
            color={"#fff"}
          />
        );
      },
      
      tabBarOptions: {
        activeTintColor: "tomato",
        labelStyle: {
          fontSize: 11,
          bottom: 15,
        },
        style: {
          position: "absolute",
          backgroundColor: "#FEFEFF",
          height: 70,
          bottom: 18,
          left: 9,
          right: 9,
          elevation: 0,
          borderRadius: 20,
          ...styles.shadow,
        },
      },
    }),
  }
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "tomato",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
  },
});
