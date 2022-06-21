import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonGradient = ({ texto, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={["#1090DD", "#1A7EBA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>{texto}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});
