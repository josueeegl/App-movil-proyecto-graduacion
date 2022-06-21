import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ({ nombre, onPress, monto, fecha, onLongPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} onLongPress={onLongPress}> 
      <Text style={styles.text}>
        {nombre} {"     "} <Text style={styles.textMonto}>Q{monto}</Text>{"     "}
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
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    margin: 10,
    borderRadius: 10,
  },
  textMonto: {
    fontSize: 18,
    color: "#4F93BC",
  },
  textFecha: {
    fontSize: 14,
    color: "red",
  },
  text: {
    fontSize: 16,
  },
});
