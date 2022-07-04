import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { or } from "react-native-reanimated";

export const onSubmit = (values, navigation, limpiar, url, texto, id) => {
  AsyncStorage.getItem("token").then((x) => {
    console.log(values);
    console.log(id);
    console.log(texto);
    if (x) {
      if (texto === "Actualizar") {
        url += id;
      }
      fetch(url, {
        method: texto === "Actualizar" ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: x,
        },
        body: JSON.stringify(values),
      })
        .then((x) => {
          console.log(x.status);
          if (x.status == 201 || x.status == 204) {
            return Alert.alert("Exito!", "Cambios realizados", [
              {
                text: "Ok",
                onPress: () => {
                  limpiar();
                },
              },
            ]);
          }
          Alert.alert("Error :(", "No se pudieron realizar los cambios");
        })
        .catch((e) => console.log(e.message));
    }
  });
};
