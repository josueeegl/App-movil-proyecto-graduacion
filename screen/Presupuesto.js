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
} from "react-native";
import { IconButton } from "react-native-paper";
import { Modal, ListItem } from "../components";
import useFetch from "../hooks/useFetch";
import useForm from "../hooks/useForm";
import { onSubmit } from "../hooks/fetchX";

const url = "https://yourfinz.herokuapp.com/presupuesto";

export const PresupuestoScreen = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);
  const setear = () => {
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  const initialState = {
    monto_inicial: "",
    descrip: "",
    nombre: "",
  };
  const { subscribe, inputs, handleSubmit } = useForm(
    initialState,
    onSubmit,
    navigation,
    setear
  );
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const { loading, data: presu } = useFetch(
    "http://192.168.140.222:3000/presupuesto",
    navigation
  );
  return (
    <View style={estilos.container}>
      {loading ? (
        <View style={estilos.Acti}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
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
              onPress={() => navigation.navigate("Detalle", { _id: item._id })}
              onLongPress={setear}
              nombre={item.nombre}
              monto={item.monto_inicial}
              fecha={item.fecha_inicial}
              index={index}
              scrollY={scrollY}
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
      <Modal
        visibility={visibility}
        setear={setear}
        inputs={inputs}
        subscribe={subscribe}
        handleSubmit={handleSubmit}
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
    backgroundColor: "rgb(174, 182, 191)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  list: {
    top: 3,
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
