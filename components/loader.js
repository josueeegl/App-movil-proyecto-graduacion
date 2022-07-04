import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export const Apploader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]} >
      <LottieView source={require("../assets/loading.json")} autoPlay loop style={{width: 100, height: 100}} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 1,
  },
});
