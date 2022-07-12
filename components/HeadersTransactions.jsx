import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

export default ({ totales }) => {
  return (
    <View style={styles(totales).container}>
      <View style={styles(totales).balanceContainer}>
        <Text style={styles(totales).txtheaders}>BALANCE</Text>
        <Text
          style={{
            marginTop: 2,
            color:
              totales === "0"
                ? "white"
                : totales[2] < 0
                ? "#C75256"
                : "#66BA69",
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          Q {totales === "0" ? "0.00" : totales[2]}
        </Text>
      </View>
      <View style={styles(totales).content}>
        <View style={styles(totales).viewContentRow}>
          <View style={styles(totales).viewRow}>
            <IconButton
              icon="arrow-up-bold-circle-outline"
              color="rgba(102, 186, 105,0.8)"
              size={20}
            />
            <Text style={styles(totales).txtheaders}>INGRESOS</Text>
          </View>
          <Text
            style={[
              styles(totales).txtTransaction,
              {
                color: "#66BA69",
              },
            ]}
          >
            Q {totales === "0" ? "0.00" : totales[0]}
          </Text>
        </View>
        <View style={styles(totales).viewContentRow}>
          <View style={styles(totales).viewRow}>
            <IconButton
              icon="arrow-down-bold-circle-outline"
              color="rgba(199, 82, 86, 0.8)"
              size={20}
            />
            <Text style={styles(totales).txtheaders}>GASTOS</Text>
          </View>
          <Text
            style={[
              styles(totales).txtTransaction,
              {
                color: "#C75256",
              },
            ]}
          >
            Q {totales === "0" ? "0.00" : totales[1]}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = (totales) =>
  StyleSheet.create({
    container: {
      backgroundColor: "rgba(255,255,255,0.1)",
      marginBottom: 30,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      padding: 15,
      paddingTop: 30,
    },
    balanceContainer: {
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      width: "70%",
      borderWidth: 1,
      borderRadius: 8,
      borderColor:
        totales === "0"
          ? "white"
          : totales[2] < 0
          ? "rgba(199, 82, 86, 0.5)"
          : "rgba(102, 186, 105, 0.5)",
      marginBottom: 5,
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
    txtTransaction: {
      fontWeight: "bold",
      fontSize: 20,
    },
    content: {
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "90%",
    },
  });
