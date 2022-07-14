import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { fetchGet } from "../hooks";
import { IconButton } from "react-native-paper";
import { ListRegistros, Apploader, HeaderTransactions } from "../components";
import { ModalTransactions } from "../components/ModalTransactions";
import { dominio } from "../config";

const { width, height } = Dimensions.get("window");

export const detallePresupuesto = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);
  const [loader, setLoader] = useState(true);

  const id_presupuesto = navigation.getParam("_id");

  const setear = () => {
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  const {
    setLoading,
    loading,
    data: transacciones,
    info,
  } = fetchGet(
    `http://${dominio}:3000/transacciones${id_presupuesto}`,
    navigation,
    setLoader
  );
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
            <>
              <HeaderTransactions totales={totales} />
              <SectionList
                style={{ marginBottom: 60 }}
                keyExtractor={(item, index) => index.toString()}
                sections={nuevo}
                renderItem={({ item }) => (
                  <ListRegistros
                    items={item}
                    navigation={navigation}
                    setLoading={setLoading}
                  />
                )}
                renderSectionHeader={({ section }) => (
                  <View style={{ paddingLeft: 20, marginBottom: 20 }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {section.title}
                    </Text>
                  </View>
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
          {loader ? <Apploader /> : null}
        </View>
      )}
      <IconButton
        icon="plus-circle"
        color="#4F93BC"
        size={50}
        onPress={setear}
        style={styles.btnContainer}
      />
      <ModalTransactions
        visibility={visibility}
        setVisibility={setVisibility}
        ID={id_presupuesto}
        setLoading={setLoading}
        navigation={navigation}
      />
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
  Acti: {
    flex: 1,
    justifyContent: "center",
  },
  btnContainer: {
    position: "absolute",
    bottom: height - 80,
    right: -12,
  },
});
