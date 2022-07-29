import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import {
  Apploader,
  PieChartGX,
  PickerFilter,
} from "../components";
import { fetchGet } from "../hooks";
import { dominio } from "../config";
import { FilterDates } from "../functions";

const url = `http://${dominio}:3000/graficas`;

export const GraficaScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [dateSelected, setDateSelected] = useState("todo");

  const d = FilterDates(dateSelected);
  const { setLoading, loading, info } = fetchGet(
    url + d,
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
          <PickerFilter
            dateSelected={dateSelected}
            setDateSelected={setDateSelected}
            setLoading={setLoading}
          />
          {info ? (
            <>
              {data[0] ? (
                <PieChartGX data={data[0]} texto={"INGRESOS"} />
              ) : null}
              {data[1] ? <PieChartGX data={data[1]} texto={"GASTOS"} /> : null}
            </>
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Image
                style={{ width: 130, height: 130, alignSelf: "center" }}
                source={require("../assets/caja.png")}
              />
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
                No hay información en este periodo de tiempo.
              </Text>
            </View>
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
