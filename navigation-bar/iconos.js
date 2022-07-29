import React from "react";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default ({ routeName, focused, horizontal, tintColor, color }) => {
  let iconName, iconColor;
  if (routeName === "Home") {
    iconName = `home${focused ? "" : "-outline"}`;
    iconColor = focused ? "#4F93BC" : "#D0D3D4";
    return (
      <Ionicons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  } else if (routeName === "Presupuesto") {
    iconName = `account-cash${focused ? "" : "-outline"}`;
    iconColor = focused ? "#4F93BC" : "#D0D3D4";
    return (
      <MaterialCommunityIcons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  } else if (routeName === "Opciones") {
    iconColor = focused ? "#4F93BC" : "#D0D3D4";
    iconName = `person-circle${focused ? "" : "-outline"}`;
    return (
      <Ionicons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  } else if (routeName === "Dinero") {
    iconName = `cash${focused ? "" : "-outline"}`;
    iconColor = focused ? "#4F93BC" : "#D0D3D4";
    return (
      <Ionicons
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  } else if (routeName === "Graficas") {
    iconName = `bar-graph`;
    iconColor = focused ? "#4F93BC" : "#D0D3D4";
    return (
      <Entypo
        name={iconName}
        size={25}
        tintColor={tintColor}
        color={iconColor}
      />
    );
  }
};
