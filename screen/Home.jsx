import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import {
  Apploader,
  HeaderTransactions,
} from "../components";
import { fetchGet } from "../hooks";
import { dominio } from "../config";

const url = `http://${dominio}:3000/transacciones/resumen`;

export const HomeScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  const { setLoading, loading, info } = fetchGet(
    url,
    navigation,
    setLoader,
    setData
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {loading ? (
        <Apploader />
      ) : (
        <ScrollView
          style={{ width: "100%", height: "100%", top: StatusBar.length }}
        >
          {info ? (
            <>
              <HeaderTransactions totales={data} />
            </>
          ) : (
            <HeaderTransactions totales={"0"} />
          )}
        </ScrollView>
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
    marginBottom: 80,
  },
});
