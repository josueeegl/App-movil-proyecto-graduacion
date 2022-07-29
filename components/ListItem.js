import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { clickDelete, formatDate } from "../functions";
import { ButtonsOptions } from "./buttonsOptions";
import { dominio } from "../config";
const { width } = Dimensions.get("window");

export default ({
  onPress,
  editar,
  onDelete,
  setLoader,
  navigation,
  setLoading,
  item,
}) => {
  
  const ft = formatDate(
    new Date(item.fecha_inicial).getDate(),
    new Date(item.fecha_inicial).getMonth()+1,
    new Date(item.fecha_inicial).getFullYear()
  );
  const alterar = () => {
    editar(item._id, item.descrip, item.nombre);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={onPress} style={{ width: "80%" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              opacity: 0.9,
              marginRight: 10,
            }}
          >
            {item.nombre}
          </Text>
          <Text
            style={{
              fontSize: 14,
              opacity: 0.7,
              color: "#eee",
              marginTop: 5,
            }}
          >
            {ft}
          </Text>
        </TouchableOpacity>
        <ButtonsOptions
          fDelete={() =>
            clickDelete(
              setLoader,
              onDelete,
              item._id,
              `http://${dominio}:3000/presupuesto`,
              navigation,
              "Home",
              setLoading
            )
          }
          fModificar={alterar}
          styleButtons={styleButtons}
          colorEdit={"#65D271"}
          fAtras={onPress}
          nameIcon={"arrow-right-circle"}
          size={30}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: 100,
    alignSelf: "center",
    flexDirection: "row",
    padding: 10,
    paddingLeft: 20,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#2E323D",
  },
});

const styleButtons = StyleSheet.create({
  delete: {
    position: "absolute",
    right: width - 400,
    top: -15,
    alignSelf: "flex-end",
  },
  modificar: { position: "absolute", right: width - 445, top: -15 },
  regresar: { position: "absolute", right: width - 490, top: -15 },
});
