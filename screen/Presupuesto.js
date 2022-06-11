import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";

import { IconButton } from "react-native-paper";
import { Modal, ListItem } from "../components";

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
const data = [
  {
    _id: "pr1",
    usuario_id: "01",
    nombre: "Josue",
    fecha_inicial: hoy.toLocaleDateString(),
    monto_inicial: 500,
    descrip: "presupuesto de educacion",
  },
  {
    _id: "pr2",
    usuario_id: "01",
    nombre: "Josue",
    fecha_inicial: hoy.toLocaleDateString(),
    monto_inicial: 500,
    descrip: "presupuesto de educacion",
  },
];

export const PresupuestoScreen = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);
  const setear = () => {
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };

  return (
    <View style={estilos.container}>
      <FlatList
        style={estilos.list}
        data={data}
        keyExtractor={(x) => x._id}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigation.navigate("Detalle", { _id: item._id })}
            nombre={item.nombre}
            monto={item.monto_inicial}
            fecha={item.fecha_inicial}
          />
        )}
      />
      <IconButton
        icon="plus-circle"
        color="#4F93BC"
        size={60}
        onPress={setear}
        style={estilos.btnContainer}
      />
      <Modal visibility={visibility}>
        {
          <View style={estilos.header}>
            <IconButton
              icon="close"
              color="black"
              size={50}
              onPress={setear}
              style={estilos.btnSalir}
            />
          </View>
        }
      </Modal>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  list: {
    alignSelf: "stretch",
  },
  btnContainer: {
    position: "absolute",
    bottom: 70,
    right: -5,
  },
  header: {
    width: "100%",
    height: 40,
    bottom: 15,
    left: 10,
  },
  btnSalir: {
    position: "absolute",
    bottom: -20,
    left: Dimensions.get("window").width - 105,
  },
});
