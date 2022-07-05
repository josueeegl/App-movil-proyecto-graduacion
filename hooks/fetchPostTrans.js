import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dominio } from "../config";

export default async (url, image, values, setear, setLoader) => {
  
  const formData = new FormData();
  formData.append("presupuesto_id", values.presupuesto_id);
  formData.append("nombre", values.nombre);
  formData.append("descrip", values.descrip);
  formData.append("valor", values.valor);
  formData.append("tipo", values.tipo);
  formData.append("tipo_pago", values.tipo_pago);
  formData.append("fecha", values.fecha.toString());
  
  if (Object.entries(image).length !== 0) {
    const ft = image.uri.split(".")[3];
    formData.append("imagen", {
      uri: image.uri,
      name: values.nombre + "." + ft,
      type: image.type + "/jepg",
    });
  }

  AsyncStorage.getItem("token").then(async (x) => {
    setLoader(true);
    await fetch(`http://${dominio}:3000/transacciones`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: x,
      },
      body: formData,
    })
      .then((x) => {
        console.log(x.status);
        if (x.status == 201) {
          setLoader(false);
          return Alert.alert("Exito!", "Se creo correctamente", [
            {
              text: "Ok",
              onPress: () => {
                setear();
              },
            },
          ]);
        }
        Alert.alert("Error :(", "No se pudieron realizar los cambios");
      });
  });
};
