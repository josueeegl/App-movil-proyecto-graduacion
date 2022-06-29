import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { IconButton } from "react-native-paper";

import { ListRegistros } from "../components";
const { width, height } = Dimensions.get("window");

export const detallePresupuesto = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);

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
  } = useFetch("http://192.168.187.222:3000/presupuesto", navigation);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <View
          style={{ width: "98%", height: "100%", top: StatusBar.length + 18 }}
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
                    marginTop: 10,
                    color: "#4F93BC",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Q1000
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
                    <IconButton icon="layers-plus" color="#D0D3D4" size={30} />
                    <Text style={styles.txtheaders}>Ingresos</Text>
                  </View>
                  <Text
                    style={{
                      color: "#66BA69",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    Q1000
                  </Text>
                </View>
                <View style={styles.viewContentRow}>
                  <View style={styles.viewRow}>
                    <IconButton icon="layers-minus" color="#D0D3D4" size={30} />
                    <Text style={styles.txtheaders}>Gastos</Text>
                  </View>
                  <Text
                    style={{
                      color: "#C75256",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    Q1000
                  </Text>
                </View>
              </View>
              <FlatList
                data={transacciones}
                keyExtractor={(x) => x._id}
                renderItem={({ item, index }) => (
                  <ListRegistros
                    onPress={() => console.log(item._id)}
                    items={item}
                    index={index}
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
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
                Aún no hay registros.
              </Text>
              <Text style={{ fontSize: 14, color: "gray" }}>
                Para agregar uno nuevo, haz clic en (+)
              </Text>
            </View>
          )}
        </View>
      )}
      <IconButton
        icon="plus-circle"
        color="#66BA69"
        size={60}
        onPress={setear}
        style={styles.btnContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#393943",
  },
  Acti: {
    flex: 1,
    justifyContent: "center",
  },
  btnContainer: {
    position: "absolute",
    bottom: 70,
    right: -5,
  },
  txtheaders: {
    color: "#D0D3D4",
    letterSpacing: 2,
    fontWeight: "bold",
    fontSize: 18,
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
