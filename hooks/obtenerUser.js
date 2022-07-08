import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dominio } from "../config";

export default (setLoader, setData, setId, navigation) => {
  const valueEmail = async () => {
    const value = await AsyncStorage.getItem("email");
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(`http://${dominio}:3000/user${value}`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    });
    if (response.status == 200) {
      const values = await response.json();
      setLoader(false);
      setData(values);
      setId(values[0]._id);
    }
  };

  useEffect(() => {
    valueEmail();
    const focusListener = navigation.addListener("didFocus", () => {
      valueEmail();
    });
    return () => {
      // clean up event listener
      focusListener.remove();
    };
  }, []);
};
