import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";
import { IconButton } from "react-native-paper";
import { Modal, ListItem } from "../components";
import useFetch from "../hooks/useFetch";

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

export const PresupuestoScreen = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);
  const setear = () => {
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };

  const { loading, data: presu } = useFetch(
    "https://yourfinz.herokuapp.com/presupuesto",
    navigation
  );
  return (
    <View style={estilos.container}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          style={estilos.list}
          data={presu}
          keyExtractor={(x) => x._id}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate("Detalle", { _id: item._id })}
              onLongPress={setear}
              nombre={item.nombre}
              monto={item.monto_inicial}
              fecha={item.fecha_inicial}
            />
          )}
        />
      )}
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
    marginBottom: 60,
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
