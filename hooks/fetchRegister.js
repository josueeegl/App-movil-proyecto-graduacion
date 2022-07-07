import React from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dominio } from "../config";

export const onSubmitReg = (values, navigation, funcion) => {
  fetch(
    `http://${dominio}:3000/user/register/?nombre=${values.nombre}&email=${values.email}&password=${values.password}`,
    {
      method: "POST",
    }
  )
    .then((x) => x.text())
    .then((x) => {
      if (x === "Usuario creado") {
        return Alert.alert("Exito!", x, [
          {
            text: "Ir al inicio",
            onPress: () => navigation.navigate("Login"),
          },
        ]);
      }
      Alert.alert("Error :(", x);
    });
};

export const onSubmitLog = (values, navigation, setLoader) => {
  setLoader(true);
  fetch(
    `http://${dominio}:3000/user/login/?email=${values.email}&password=${values.password}`,
    { 
      method: "POST",
    }
  )
    .then((x) => x.text())
    .then((x) => {
      try {
        return JSON.parse(x);
      } catch {
        throw x;
      }
    })
    .then((x) => {
      setLoader(false);
      AsyncStorage.setItem("token", x.token);
      AsyncStorage.setItem("email", values.email);
      navigation.navigate("Root");
    })
    .catch((e) => {
      setLoader(false);
      Alert.alert("Error :(", e);
    });
};
