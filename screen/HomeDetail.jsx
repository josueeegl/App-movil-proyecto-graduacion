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

export const HomeDetailScreen = ({ navigation }) => {
  const detail = navigation.getParam("item");
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <ImageBackground source={{ uri: detail.imagen }} style={styles.imagen}>
        <Text>{detail.name}</Text>
      </ImageBackground>
      <IconButton
        icon="close"
        color="#C75256"
        size={60}
        onPress={() => navigation.navigate("Home")}
        style={styles.btnContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  imagen: {
    flex: 1,
    top: 2,
    alignSelf: "center",
    height: "100%",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    position: "absolute",
    top: -20,
    right: -15,
    zIndex: 1,
  },
});
