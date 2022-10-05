import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import { IconButton } from "react-native-paper";
import { Modal, ListItem, Apploader } from "../components";
import { onDelete, useForm, onSubmitX, fetchGet } from "../hooks";
import { dominio } from "../config"; 

const url = `${dominio}/presupuesto`;

export const PresupuestoScreen = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);
  const [texto, setTexto] = useState("Listo");
  const [id, setId] = useState();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  const setear = () => {
    setTexto("Listo");
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  const limpiar = () => {
    setear();
    setInputs("");
    setLoading(true);
  };
  const editar = (id, descrip, nombre) => {
    setear();
    initialState.descrip = descrip;
    initialState.nombre = nombre;
    setInputs(initialState);
    setTexto("Actualizar");
    setId(id);
  };
  const initialState = {
    descrip: "",
    nombre: "",
  };
  const { subscribe, inputs, handleSubmit, setInputs } = useForm(
    initialState,
    onSubmitX,
    navigation,
    limpiar,
    url,
    texto,
    id
  );

  const {
    setLoading,
    loading,
    info,
  } = fetchGet(url, navigation, setLoader,setData);

  return (
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" backgroundColor="black"/>
      {loading ? (
        <Apploader />
      ) : (
        <View
          style={{ width: "98%", height: "100%", top: StatusBar.length + 18 }}
        >
          {info ? (
            <FlatList
              style={estilos.list}
              data={data}
              keyExtractor={(x) => x._id}
              renderItem={({ item, index }) => (
                <ListItem
                  onPress={() =>
                    navigation.navigate("Detalle", { _id: item._id, nombre: item.nombre })
                  }
                  editar={editar}
                  onDelete={onDelete}
                  setLoader={setLoader}
                  navigation={navigation}
                  setLoading={setLoading}
                  item={item}
                />
              )}
            />
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
                No tienes presupuestos registrados.
              </Text>
              <Text style={{ fontSize: 14, color: "gray" }}>
                Para crear uno nuevo, haz clic en (+)
              </Text>
            </View>
          )}
        </View>
      )}
      <IconButton
        icon="plus-circle"
        color="#4F93BC"
        size={60}
        onPress={setear}
        style={estilos.btnContainer}
      />
      <Modal
        visibility={visibility}
        setear={limpiar}
        inputs={inputs}
        subscribe={subscribe}
        handleSubmit={handleSubmit}
        texto={texto}
      ></Modal>
      {loader ? <Apploader /> : null}
    </View>
  );
};

const estilos = StyleSheet.create({
  Acti: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#393943",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  list: {
    top: 3,
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
