import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default ({ setPresu, data, id }) => {
  const [selectedPresupuesto, setSelectedPresupuesto] = useState(id);
  const array = [];
  const handleClick = (item, id) => {
    setSelectedPresupuesto(item);
    setPresu(item);
  };
  const listItem = () => { 
    array.splice(0, array.length);
    array.push(
      <Picker.Item
        label={"Seleccione el presupuesto"}
        value={"desconocido"}
        key={1}
        style={{ fontSize: 13 }}
      />
    );
    data.forEach((item) => {
      array.push(
        <Picker.Item
          label={item["nombre"]}
          value={item["_id"]}
          key={item["_id"]}
          style={{ fontSize: 13 }}
        />
      );
    });
    return array;
  };
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Picker
        dropdownIconColor={"white"}
        style={styles.picker}
        selectedValue={selectedPresupuesto}
        onValueChange={(itemValue, itemIndex) => {
          listItem();
          handleClick(itemValue, itemIndex);
        }}
      >
        {listItem()}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "#47474F",
    fontSize: 14,
    color: "white",
    width: 320,
    borderRadius: 15,
  },
});
