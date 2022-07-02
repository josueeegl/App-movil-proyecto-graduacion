import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  ActivityIndicator,
  Image,
  StatusBar,
} from "react-native";
import { IconButton } from "react-native-paper";
import { Modal, ListItem } from "../components";
import useFetch from "../hooks/useFetch";
import { onDelete } from "../hooks/fetchEliminar";
import useForm from "../hooks/useForm";
import { onSubmit } from "../hooks/fetchX";
import { Apploader } from "../components/loader";

const url = "https://yourfinz.herokuapp.com/presupuesto";

export const PresupuestoScreen = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);
  const [texto, setTexto] = useState("Listo");
  const [id, setId] = useState();
  const [Datos, setDatos] = useState();
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
  const editar = (monto_inicial, descrip, nombre, id) => {
    setear();
    initialState.descrip = descrip;
    initialState.monto_inicial = monto_inicial.toString();
    initialState.nombre = nombre;
    setInputs(initialState);
    setTexto("Actualizar");
    setId(id);
  };
  const initialState = {
    monto_inicial: "",
    descrip: "",
    nombre: "",
  };
  const { subscribe, inputs, handleSubmit, setInputs } = useForm(
    initialState,
    onSubmit,
    navigation,
    limpiar,
    url,
    texto,
    id
  );
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const {
    setLoading,
    loading,
    data: presu,
    info,
  } = useFetch("https://yourfinz.herokuapp.com/presupuesto", navigation);

  return (
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" />
      {loading ? (
        <Apploader />
      ) : (
        <View style={{ width: "98%", height: "100%", top: StatusBar.length + 18 }}>
          {info ? (
            <Animated.FlatList
              style={estilos.list}
              data={presu}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
              )}
              keyExtractor={(x) => x._id}
              renderItem={({ item, index }) => (
                <ListItem
                  onPress={() =>
                    navigation.navigate("Detalle", { _id: item._id })
                  }
                  descrip={item.descrip}
                  editar={editar}
                  nombre={item.nombre}
                  monto={item.monto_inicial}
                  fecha={item.fecha_inicial}
                  index={index}
                  scrollY={scrollY}
                  id={item._id}
                  onDelete={onDelete}
                  setLoading={setLoading}
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
