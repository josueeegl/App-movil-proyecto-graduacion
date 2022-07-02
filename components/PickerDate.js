import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const PickerDate = ({ setFecha }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [textFt, setTextFt] = useState(
    new Date().getDate() +
      " - " +
      (new Date().getMonth() + 1) +
      " - " +
      new Date().getFullYear()
  );

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleClick = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    setText(tempDate);
    setTextFt(
      tempDate.getDate() +
        " - " +
        (tempDate.getMonth() + 1) +
        " - " +
        tempDate.getFullYear()
    );
    setFecha(tempDate);
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
        Fecha
      </Text>
      <TouchableOpacity onPress={() => showMode("date")} style={styles.pick}>
        <Text style={{ color: "white" }}>{textFt}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            handleClick(event, selectedDate);
          }}
        />
      )}
    </View>
  );
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
  pick: {
    padding: 10,
    color: "white",
    marginTop: 10,
    backgroundColor: "#47474F",
    borderRadius: 2,
  },
});
