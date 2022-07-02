import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const PickerPago = ({ setPago, visible, pago }) => {


  if (visible == 0) {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
          Tipo de pago
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={pago}
          onValueChange={setPago}
        >
          <Picker.Item label="Selecciona el tipo de pago" value="Unknown" />
          <Picker.Item label="Efectivo" value="Efectivo" />
          <Picker.Item
            label="Tarjeta de crédito o débito"
            value="Tarjeta de crédito o débito"
          />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  picker: {
    marginTop: 5,
    backgroundColor: "#47474F",
    fontSize: 12,
    color: "white",
    width: 300,
    padding: 5,
    borderRadius: 15,
  },
});
