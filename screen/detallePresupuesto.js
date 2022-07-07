import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { fetchGet } from "../hooks";
import { IconButton } from "react-native-paper";
import { ListRegistros, Apploader } from "../components";
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
        <View
          style={{ width: "100%", height: "100%", top: StatusBar.length }}
        >
          {info ? (
            <>
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  marginBottom: 30,
                  borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    padding: 15,
                    paddingTop: 30,
                  
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70%",
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor:
                      totales[2] < 0
                        ? "rgba(199, 82, 86, 0.5)"
                        : "rgba(102, 186, 105, 0.5)",
                    marginBottom: 5,
                  }}
                >
                  <Text style={styles.txtheaders}>BALANCE</Text>
                  <Text
                    style={{
                      marginTop: 2,
                      color: totales[2] < 0 ? "#C75256" : "#66BA69",
                      fontWeight: "bold",
                      fontSize: 22,
                    }}
                  >
                    Q {totales[2]}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    width: "90%",
                  }}
                >
                  <View style={styles.viewContentRow}>
                    <View style={styles.viewRow}>
                      <IconButton
                        icon="arrow-up-bold-circle-outline"
                        color="rgba(102, 186, 105,0.8)"
                        size={20}
                      />
                      <Text style={styles.txtheaders}>INGRESOS</Text>
                    </View>
                    <Text
                      style={{
                        color: "#66BA69",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Q {totales[0]}
                    </Text>
                  </View>
                  <View style={styles.viewContentRow}>
                    <View style={styles.viewRow}>
                      <IconButton
                        icon="arrow-down-bold-circle-outline"
                        color="rgba(199, 82, 86, 0.8)"
                        size={20}
                      />
                      <Text style={styles.txtheaders}>GASTOS</Text>
                    </View>
                    <Text
                      style={{
                        color: "#C75256",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Q {totales[1]}
                    </Text>
                  </View>
                </View>
              </View>
              <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={nuevo.reverse()}
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
  txtheaders: {
    fontSize: 10,
    letterSpacing: 2,
    color: "white",
    fontWeight: "500",
    opacity: 0.7,
  },
  viewContentRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  viewRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
