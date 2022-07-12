import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { Apploader, HeaderTransactions } from "../components";
import { fetchGet } from "../hooks";
import { dominio } from "../config";

const url = `http://${dominio}:3000/transacciones`;

export const DineroScreen = ({ navigation }) => {
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
      {loading ? (
        <Apploader />
      ) : (
        <View style={{ width: "100%", height: "100%", top: StatusBar.length }}>
          {info ? (
            <HeaderTransactions totales={totales} />
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Image
                style={{ width: 130, height: 130, marginBottom: 15 }}
                source={require("../assets/caja.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "gray",
                  margin: 5,
                }}
              >
                Aún no tienes ingresos o gastos registrados.
              </Text>
              <Text style={{ fontSize: 14, color: "gray" }}>
                Crea uno haciendo clic en (+)
              </Text>
            </View>
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
