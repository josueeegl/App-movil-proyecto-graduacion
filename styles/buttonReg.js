import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonReg = ({onPress, texto}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    color: "#4F93BC",
    marginTop: 15,
  },
});
