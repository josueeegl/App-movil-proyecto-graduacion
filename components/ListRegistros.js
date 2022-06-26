import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  Image,
} from "react-native";
import { IconButton } from "react-native-paper";
const { width } = Dimensions.get("window");

export default ({ items, index, setLoading }) => {
  const borrar = () => {
    Alert.alert("¿Quieres eliminarlo?", "", [
      {
        text: "NO",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "SI",
        onPress: () => {
          console.log(id);
          onDelete(id, "http://192.168.235.222:3000/presupuesto", setLoading);
        },
      },
    ]);
  };
  const alterar = () => {
    editar(monto, descrip, nombre, id);
  };
  return (
    <View
      style={{
        width: "90%",
        height: 100,
        alignSelf: "center",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/spider.jpg")}
          style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
        />
        <TouchableOpacity
          onPress={() => {
            console.log("Click item");
          }}
          style={{ width: "80%", marginHorizontal: 10 }}
        >
          <Text style={styles.txtheaders}>Restaurante</Text>
          <Text style={{ color: "#D0D3D4", fontSize: 16, opacity: 0.5 }}>
            cash
          </Text>
        </TouchableOpacity>
        <View>
          <IconButton
            icon="delete"
            color="#EF5350"
            size={30}
            style={{
              position: "absolute",
              top: -15,
              alignSelf: "flex-end",
            }}
            onPress={() => {
              console.log("Eliminar");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 90,
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
  },
  txtheaders: {
    color: "#D0D3D4",
    fontSize: 18,
  },
});
