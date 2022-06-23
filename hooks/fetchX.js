import React from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const onSubmit = (values, navigation, setear) => {
  AsyncStorage.getItem("token").then((x) => {
    if (x) {
      fetch("http://192.168.140.222:3000/presupuesto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: x,
        },
        body: JSON.stringify(values),
      }).then((x) => {
        console.log(x.status);
        if (x.status !== 201) {
          return Alert.alert("Error :(", "No se pudo ingresar");
        }
        Alert.alert("Exito!", "Cambios realizados", [
          {
            text: "Ok",
            onPress: setear
          },
        ]);
      });
    }
  });
};
