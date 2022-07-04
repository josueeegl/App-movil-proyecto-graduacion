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
import fetchTransaction from "../hooks/fetchTransactions";
import { IconButton } from "react-native-paper";
import { ListRegistros, ModalTransactions } from "../components";
import { Apploader } from "../components/loader";

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
  } = fetchTransaction(
    `http://192.168.37.222:3000/transacciones${id_presupuesto}`,
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
          style={{ width: "98%", height: "90%", top: StatusBar.length + 18 }}
        >
          {info ? (
            <>
              <View
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "rgba(208, 211, 212, 0.1) ",
                  marginBottom: 10,
                }}
              >
                <Text style={styles.txtheaders}>Balance</Text>
                <Text
                  style={{
                    marginTop: 5,
                    color: totales[2] < 0 ? "#C75256" : "#66BA69",
                    fontWeight: "bold",
                    fontSize: 14,
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
                  borderBottomWidth: 1,
                  borderBottomColor: "white",
                  marginBottom: 30,
                }}
              >
                <View style={styles.viewContentRow}>
                  <View style={styles.viewRow}>
                    <IconButton icon="layers-plus" color="#D0D3D4" size={25} />
                    <Text style={styles.txtheaders}>Ingresos</Text>
                  </View>
                  <Text
                    style={{
                      color: "#66BA69",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    Q {totales[0]}
                  </Text>
                </View>
                <View style={styles.viewContentRow}>
                  <View style={styles.viewRow}>
                    <IconButton icon="layers-minus" color="#D0D3D4" size={25} />
                    <Text style={styles.txtheaders}>Gastos</Text>
                  </View>
                  <Text
                    style={{
                      color: "#C75256",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    Q {totales[1]}
                  </Text>
                </View>
              </View>
              <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={nuevo.reverse()}
                renderItem={({ item }) => (
                  <ListRegistros items={item} setLoading={setLoading} />
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
    color: "#D0D3D4",
    letterSpacing: 2,
    fontWeight: "bold",
    fontSize: 16,
  },
  viewContentRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  viewRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
