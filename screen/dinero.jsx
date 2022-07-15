import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { Apploader, ListDinero } from "../components";
import { fetchGet } from "../hooks";
import { dominio } from "../config";
import setDayWithOptions from "date-fns/esm/fp/setDayWithOptions/index.js";

const url = `http://${dominio}:3000/transacciones/detalle`;

export const DineroScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(true);
  const [filter, setFilter] = useState([]);
  const [datos, setDatos] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const {
    setLoading,
    loading,
    info,
  } = fetchGet(url, navigation, setLoader, setData);

  const searchFilter = (text) => {
    setSearch(text);
    setDatos(data);
    if (text !== "") {
      const newData = datos.filter(
        (x) =>
          x.nombre.toUpperCase().indexOf(text.toUpperCase()) > -1 ||
          x.descrip.toUpperCase().indexOf(text.toUpperCase()) > -1 ||
          x.valor.toString().toUpperCase().indexOf(text.toUpperCase()) > -1
      );
      setFilter(newData);
    } else {
      setFilter([]);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Apploader />
      ) : (
        <View style={{ width: "100%", height: "100%", top: StatusBar.length }}>
          {info ? (
            <>
              <TextInput
                style={{
                  top: 20,
                  marginBottom: 30,
                  height: 50,
                  width: "90%",
                  fontSize: 14,
                  color: "white",
                  alignSelf: "center",
                  padding: 10,
                  borderRadius: 15,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                value={search}
                placeholder="Buscar"
                placeholderTextColor={"white"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchFilter(text)}
              />
              <FlatList
                style={{ marginBottom: 70 }}
                data={filter.length === 0 ? data : filter}
                keyExtractor={(x) => x._id}
                renderItem={({ item, index }) => (
                  <ListDinero
                    items={item}
                    navigation={navigation}
                    setLoading={setLoading}
                  />
                )}
              />
            </>
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
