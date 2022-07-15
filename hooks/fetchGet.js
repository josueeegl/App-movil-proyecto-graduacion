import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (url, navigation, setLoader, setData) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(true);
  

  const fetchData = () => {
    AsyncStorage.getItem("token").then(async (x) => {
      fetch(url, {
        method: "GET",
        headers: {
          authorization: x,
        },
      })
        .then(async (x) => {
          if (x.status == 200) {
            const data = await x.json();
            setData(data);
            setLoading(false);
            setLoader(false);
            if (data.length === 0) {
              data.forEach((z) => {
                console.log(z);
              });
              setInfo(false);
            } else {
              setInfo(true);
            }
          }
        })
        .catch((e) => {
          console.log(e);
          return Alert.alert(
            "Error",
            "Hubo un error, verifica la red e intenta de nuevo."
          );
          
        });
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

  return { setLoading, loading, info };
};
