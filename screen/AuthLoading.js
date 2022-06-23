import React, { useEffect } from "react";
import { ActivityIndicator, View, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthLoading = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AsyncStorage.getItem("token").then((x) => {
        navigation.navigate(x ? "Root" : "OnBoarding");
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Image
        style={{ width: 100, height: 100, marginBottom: 15 }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
