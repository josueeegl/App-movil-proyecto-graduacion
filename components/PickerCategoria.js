import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const PickerCategory = ({ buttons, selectedType, setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("Unknown");

  const handleClick = (item, id) => {
    setSelectedCategory(item);
    setCategory(item);
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
        Categoría
      </Text>
      {selectedType == 0 ? (
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            handleClick(itemValue, itemIndex)
          }
        >
          <Picker.Item label="Selecciona una categoria" value="Unknown" />
          <Picker.Item label="Transporte" value="Transporte" />
          <Picker.Item label="Educación" value="Educación" />
          <Picker.Item label="Comida" value="Comida" />
          <Picker.Item label="Salud" value="Salud" />
          <Picker.Item label="Entretenimiento" value="Entretenimiento" />
          <Picker.Item label="Vacaciones" value="Vacaciones" />
          <Picker.Item label="Fiesta" value="Fiesta" />
          <Picker.Item label="Servicios" value="Servicios" />
        </Picker>
      ) : (
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            handleClick(itemValue, itemIndex)
          }
        >
          <Picker.Item label="Selecciona una categoria" value="Unknown" />
          <Picker.Item label="Salario" value="Salario" />
          <Picker.Item label="Aguinaldo" value="Aguinaldo" />
          <Picker.Item label="Premio" value="Premio" />
          <Picker.Item label="Inversiones" value="Inversiones" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginTop: 5,
    backgroundColor: "#47474F",
    fontSize: 14,
    color: "white",
    width: 300,
    padding: 5,
    borderRadius: 15,
  },
});
