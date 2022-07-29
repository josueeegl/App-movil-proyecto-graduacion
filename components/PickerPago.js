import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default ({ setPago, visible, pago }) => {
  if (visible == 0) {
    return (
        <Picker
          style={styles.picker}
          selectedValue={pago}
          onValueChange={setPago}
        >
          <Picker.Item label="Efectivo" value="Efectivo"  style={{ fontSize: 13 }} />
          <Picker.Item
            label="Tarjeta de crédito o débito"
            value="Tarjeta de crédito o débito"
            style={{ fontSize: 13 }}
          />
          <Picker.Item label="Otro" value="Otro" style={{ fontSize: 13 }}/>
        </Picker>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  picker: {
    marginLeft: 20,
    backgroundColor: "transparent",
    fontSize: 13,
    color: "white",
    width: 220,
  },
});
