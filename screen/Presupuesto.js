import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { styles } from "../styles";
import { IconButton, Colors } from "react-native-paper";

export const PresupuestoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mi presupuesto</Text>
      <IconButton
        icon="plus-circle"
        color="#4F93BC"
        size={50}
        onPress={() => console.log("Pressed")}
        style={estilos.btnContainer}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    bottom: 80,
    right: -5,
  },
});
