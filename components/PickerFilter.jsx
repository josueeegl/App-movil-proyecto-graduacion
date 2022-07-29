import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default ({ setDateSelected, dateSelected, setLoading }) => {
  return (
    <View
      style={{
        alignSelf: "flex-end",
        marginBottom: 10,
      }}
    >
      <Picker
        dropdownIconColor={"white"}
        style={styles.picker}
        selectedValue={dateSelected}
        onValueChange={(value) => {
          setDateSelected(value);
          setLoading ? setLoading(true) : null;
        }}
        a
      >
        <Picker.Item label="TODO" value="todo" style={{ fontSize: 12 }} />
        <Picker.Item label="HOY" value="hoy" style={{ fontSize: 12 }} />
        <Picker.Item label="SEMANA" value="semana" style={{ fontSize: 12 }} />
        <Picker.Item label="MES" value="mes" style={{ fontSize: 12 }} />
        <Picker.Item label="AÑO" value="year" style={{ fontSize: 12 }} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "transparent",
    fontSize: 8,
    color: "rgba(255,255,255,0.7)",
    width: 127,
  },
});
