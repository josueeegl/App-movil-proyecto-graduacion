import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default ({ setDateSelected,dateSelected }) => {
  return (
    <View style={{ flex: 1, marginTop: 10, flexDirections: "row" }}>
      <Picker
        dropdownIconColor={"white"}
        style={styles.picker}
        selectedValue={dateSelected}
        onValueChange={setDateSelected}
        a
      >
        <Picker.Item label="Todo" value="todo" />
        <Picker.Item label="Hoy" value="hoy" />
        <Picker.Item label="Semana" value="semana" />
        <Picker.Item label="Mes" value="mes" />
        <Picker.Item label="Año" value="year" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginTop: 5,
    backgroundColor: "transparent",
    fontSize: 12,
    color: "white",
    width: 300,
    padding: 5,
    borderRadius: 15,
  },
});
