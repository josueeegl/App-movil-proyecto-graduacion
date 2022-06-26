import React from "react";
import { Text, TextInput, View, StyleSheet, FlatList } from "react-native";
import { styles } from "../styles";

export const detallePresupuesto = ({ navigation }) => {
  console.log(navigation.getParam('_id'));
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
};
