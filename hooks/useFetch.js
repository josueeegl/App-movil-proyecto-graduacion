import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

const useFetch = (url, navigation) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    if (response.status == 200) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    } else {
      Alert.alert('Error');
    }
  };

  useEffect(() => {
    fetchData();
    const focusListener = navigation.addListener("didFocus", () => {
      fetchData();
    });
    return () => {
      // clean up event listener
      focusListener.remove();
    };
  }, []);

  return { loading, data };
};

export default useFetch;
