import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { clickDelete } from "../functions";
import { ButtonsOptions } from "./buttonsOptions";
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
              fontSize: 18,
              opacity: 0.7,
              color: "#eee",
              marginTop: 5,
            }}
          >
            {item.fecha_inicial.toString().split("T")[0]}
          </Text>
        </TouchableOpacity>
        <ButtonsOptions
          fDelete={() =>
            clickDelete(
              setLoader,
              onDelete,
              item._id,
              "https://yourfinz.herokuapp.com/presupuesto",
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
    height: 120,
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
