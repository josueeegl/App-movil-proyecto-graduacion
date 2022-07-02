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
          source={{ uri: items.imagen.secure_url }}
          style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
        />
        <TouchableOpacity
          onPress={() => {
            console.log(items._id);
          }}
          style={{ width: "80%", marginHorizontal: 20 }}
        >
          <Text style={styles.txtheaders}>{items.nombre}</Text>
          <Text style={{ color: "#D0D3D4", fontSize: 14, opacity: 0.5 }}>
            {items.tipo_pago}
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: items.tipo ==='Gasto' ? "#C75256" : "#66BA69",
              fontSize: 16,
              position: "absolute",
              right: width - (width - 35),
              alignSelf: "flex-end",
            }}
          >
            Q {items.valor}
          </Text>
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
    color: "white",
    fontSize: 16,
  },
});
