import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchTransaction = (url, navigation, setLoader) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    AsyncStorage.getItem("token").then(async (x) => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          authorization: x,
        },
      });
      if (response.status == 200) {
        const data = await response.json();
        setData(data);
        setLoading(false);
        setLoader(false);
        if (data.length === 0) {
          setInfo(false);
        } else {
          setInfo(true);
        }
      } else {
        Alert.alert("Error");
      }
    });
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
    const focusListener = navigation.addListener("didFocus", () => {
      fetchData();
    });
    return () => {
      // clean up event listener
      focusListener.remove();
    };
  }, [loading]);

  return { setLoading, loading, data, info };
};

export const fetchPutTransaction = (url, data, navigation) => {
  AsyncStorage.getItem("token").then((x) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: x,
      },
      body: JSON.stringify(data),
    })
      .then((x) => {
        console.log(x.status);
        if (x.status == 204) {
          return Alert.alert("Exito!", "Cambios realizados", [
            {
              text: "Ok",
              onPress: () => navigation.navigate("Detalle"),
            },
          ]);
        }
        Alert.alert("Error :(", "No se pudieron realizar los cambios");
      })
      .catch((e) => console.log(e.message));
  });
};
