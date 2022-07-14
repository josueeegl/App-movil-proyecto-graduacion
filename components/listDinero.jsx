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
import { formatearYear, formatear } from "../hooks";
const { width } = Dimensions.get("window");

export default ({ items, navigation, setLoading }) => {
  const fechayhora = new Date(items.fecha).toString().split(" ").splice(0, 4);
  const d = `${formatear(fechayhora[0])} ${fechayhora[2]} de ${formatearYear(
    fechayhora[1]
  )}`;
  return (
    <View
      style={{
        width: "90%",
        height: 160,
        alignSelf: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.2)",
        padding: 5,
      }}
    >
      <TouchableOpacity
        style={{
          margin: 5,
        }}
        onPress={() => {
          navigation.navigate("Detail", {
            items: items,
            setLoading: setLoading,
          });
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
            {items.nombre}
          </Text>
          <Text
            style={{
              position: "absolute",
              left: width - 150,
              color: items.tipo === "Gasto" ? "#C75256" : "#66BA69",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Q {items.valor.toFixed(2)}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: items.imagen.secure_url }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 40 / 2,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{ color: "white", fontSize: 12 }}>
              {items.descrip}
            </Text>
            {items.tipo_pago !== "" ? (
              <Text style={{ color: "white", fontSize: 12 }}>
                {items.tipo_pago}
              </Text>
            ) : null}
            <Text
              style={{ position: "absolute", top: 70, color: "white", opacity: 0.5, fontSize: 10, left: width - 270, }}
            >
              {d}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
    color: "white",
    fontSize: 16,
  },
});
