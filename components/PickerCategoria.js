import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default ({ buttons, selectedType, setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("Unknow");

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
          dropdownIconColor={"white"}
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            handleClick(itemValue, itemIndex)
          }
        >
          <Picker.Item label="Selecciona una categoria" value="Unknown" style={{ fontSize: 13 }} />
          <Picker.Item label="Transporte" value="Transporte" style={{ fontSize: 13 }}/>
          <Picker.Item label="Educación" value="Educación" style={{ fontSize: 13 }}/>
          <Picker.Item label="Comida" value="Comida" style={{ fontSize: 13 }}/>
          <Picker.Item label="Salud" value="Salud" style={{ fontSize: 13 }}/>
          <Picker.Item label="Entretenimiento" value="Entretenimiento" style={{ fontSize: 13 }}/>
          <Picker.Item label="Vacaciones" value="Vacaciones" style={{ fontSize: 13 }}/>
          <Picker.Item label="Fiesta" value="Fiesta" style={{ fontSize: 13 }}/>
          <Picker.Item label="Servicios" value="Servicios" style={{ fontSize: 13 }}/>
          <Picker.Item label="Otro" value="Otro" style={{ fontSize: 13 }}/>
        </Picker>
      ) : (
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            handleClick(itemValue, itemIndex)
          }
        >
          <Picker.Item label="Selecciona una categoria" value="Unknown" style={{ fontSize: 13 }}/>
          <Picker.Item label="Salario" value="Salario" style={{ fontSize: 13 }}/>
          <Picker.Item label="Aguinaldo" value="Aguinaldo" style={{ fontSize: 13 }}/>
          <Picker.Item label="Premio" value="Premio" style={{ fontSize: 13 }}/>
          <Picker.Item label="Inversiones" value="Inversiones" style={{ fontSize: 13 }} />
          <Picker.Item label="Otro" value="Otro" style={{ fontSize: 13 }}/>
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
    width: 320,
    padding: 5,
    borderRadius: 15,
  },
});
