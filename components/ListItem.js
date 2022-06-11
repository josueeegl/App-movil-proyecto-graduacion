import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ({ nombre, onPress, monto, fecha }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>
        {nombre} - <Text style={styles.textMonto}>{monto}</Text>{"                          "}
        <Text style={styles.textFecha}>{fecha}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 70,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  textMonto: {
    fontSize: 18,
    color: "#4F93BC",
  },
  textFecha: {
    fontSize: 14,
    color: "red",
  },
});
