import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { IconButton } from "react-native-paper";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const colors = [
  "#80B0C6",
  "#F5D2BC",
  "#F9F5F4",
  "#E5D7D7",
  "#EE805F",
  "#F7BDC9",
  "#327C7E",
  "#ffffff",
];

export const HomeDetailScreen = ({ navigation }) => {
  var Aleatorio = Math.floor(Math.random() * 8);
  const detail = navigation.getParam("item");
  return (
    <View style={[StyleSheet.absoluteFillObject, styles(Aleatorio).container]}>
      <Image source={{ uri: detail.imagen }} style={styles(Aleatorio).imagen} />
      <Text>{detail.name}</Text>
      <IconButton
        icon="close"
        color="#C75256"
        size={60}
        onPress={() => navigation.navigate("Home")}
        style={styles(Aleatorio).btnContainer}
      />
    </View>
  );
};

const styles = (Aleatorio) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors[Aleatorio],
      zIndex: 1,
    },
      imagen: {
        bottom: 100,
      position: "absolute",
      alignSelf: "center",
      height: 200,
      width: 150,
      borderRadius: 15,
    },
    btnContainer: {
      position: "absolute",
      top: -20,
      right: -15,
      zIndex: 1,
    },
  });
