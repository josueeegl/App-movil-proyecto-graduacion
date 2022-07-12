import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { Apploader, HeaderTransactions } from "../components";
import { fetchGet } from "../hooks";
import { dominio } from "../config";

const url = `http://${dominio}:3000/transacciones/resumen`;

export const HomeScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(true);

  const {
    setLoading,
    loading,
    data: transacciones,
    info,
  } = fetchGet(url, navigation, setLoader);
  const totales = transacciones.slice(0, 3);
  const nuevo = transacciones.filter((item) => typeof item === "object");
  return (
    <View style={styles.container}>
      
      <StatusBar barStyle="light-content" />
      {loading ? (
        <Apploader />
      ) : (
        <View style={{ width: "100%", height: "100%", top: StatusBar.length }}>
          {info ? (
            <HeaderTransactions totales={totales} />
          ) : (
            <HeaderTransactions totales={"0"} />
          )}
        </View>
      )}
      {loader ? <Apploader /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#393943",
  },
});
