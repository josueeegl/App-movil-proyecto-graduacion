import React from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const onDelete = (values, url, setLoading) => {
  console.log(url + values);
  AsyncStorage.getItem("token").then((x) => {
    if (x) {
      fetch(url + values, {
        method: "DELETE",
        headers: {
          authorization: x,
        },
      }).then((x) => {
        if (x.status !== 204) {
          return Alert.alert("Error :(", "Hubo un problema al eliminarlo");
        }
        setLoading(true);
      });
    }
  });
};
