import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  Text,
  Image,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { IconButton } from "react-native-paper";
import { formatearYear, onDelete, fetchPut } from "../hooks";
import { dominio } from "../config";
import { PickerDate, Apploader, ButtonsOptions } from "../components";
import { clickDelete } from "../functions";

export const DetailTransactions = ({ navigation, pantalla }) => {
  const items = navigation.getParam("items");
  const setLoading = navigation.getParam("setLoading");
  const [loader, setLoader] = useState(false);
  const [valor, setValor] = useState("");
  const [category, setCategory] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoPago, setTipoPago] = useState("");
  const [date, setDate] = useState(null);
  const data = {};
  const fechayhora = new Date(items.fecha).toString().split(" ").splice(0, 4);

  const d = `${fechayhora[2]} de ${formatearYear(fechayhora[1])} del ${
    fechayhora[3]
  }`;

  const modificar = () => {
    setLoader(true);
    category.length !== 0 ? (data.nombre = category) : null;
    descripcion.length !== 0 ? (data.descrip = descripcion) : null;
    valor.length !== 0 ? (data.valor = valor) : null;
    tipoPago.length !== 0 ? (data.tipo_pago = tipoPago) : null;
    date ? (data.fecha = date) : null;

    if (Object.entries(data).length !== 0) {
      fetchPut(
        `${dominio}/transacciones${items._id}`,
        data,
        navigation,
        pantalla
      );
      setLoader(false);
    } else {
      Alert.alert("Modificación", "No haz realizado cambios");
      setLoader(false);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: "#393943",
            height: "50%",
          },
        ]}
      />
      <Image source={{ uri: items.imagen.secure_url }} style={styles.imagen} />
      <View style={styles.scrollview}>
        <KeyboardAwareScrollView>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "bold",
              backgroundColor: items.tipo === "Gasto" ? "#C75256" : "#66BA69",
              borderRadius: 10,
              alignSelf: "center",
              padding: 10,
              marginBottom: 10,
            }}
          >
            {items.tipo.toUpperCase()}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.tag}>Categoria</Text>
              <TextInput
                placeholderTextColor={"white"}
                style={styles.textInput}
                placeholder={items.nombre + "  "}
                onChangeText={setCategory}
                value={category}
                maxLength={20}
              />
            </View>
            <TextInput
              placeholderTextColor={
                items.tipo === "Gasto" ? "#C75256" : "#66BA69"
              }
              style={{
                fontSize: 24,
                color: items.tipo === "Gasto" ? "#C75256" : "#66BA69",
                fontWeight: "500",
              }}
              placeholder={"Q " + items.valor.toFixed(2).toString()}
              onChangeText={setValor}
              value={valor}
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.tag}>Descripción</Text>
          <TextInput
            placeholderTextColor={"white"}
            style={[styles.textInput, { maxWidth: 350 }]}
            placeholder={items.descrip}
            onChangeText={setDescripcion}
            value={descripcion}
            multiline={true}
            maxLength={100}
          />

          {items.tipo_pago ? (
            <View>
              <Text style={styles.tag}>Tipo de pago utilizado</Text>
              <TextInput
                placeholderTextColor={"white"}
                style={styles.textInput}
                placeholder={items.tipo_pago}
                onChangeText={setTipoPago}
                value={tipoPago}
                maxLength={30}
              />
            </View>
          ) : null}
          <PickerDate setFecha={setDate} tag={d} styl={styles} />
          <Text
            style={{
              fontSize: 10,
              color: "white",
              marginTop: 20,
              opacity: 0.8,
            }}
          >
            Para editar algún dato solo debes presionar sobre el. Para guardar
            cambios haz clic en el lápiz.
            <IconButton icon="square-edit-outline" color="white" size={10} />
          </Text>

          <ButtonsOptions
            fDelete={() =>
              clickDelete(
                setLoader,
                onDelete,
                items._id,
                `${dominio}/transacciones`,
                navigation,
                pantalla,
                setLoading
              )
            }
            fModificar={modificar}
            styleButtons={null}
            colorEdit={"white"}
            fAtras={() => navigation.navigate(pantalla)}
            nameIcon={"arrow-left"}
            size={40}
            styleView={styles.styleView}
          />
        </KeyboardAwareScrollView>
      </View>
      {loader ? <Apploader /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tag: {
    fontSize: 12,
    color: "white",
    fontWeight: "500",
    marginTop: 20,
    opacity: 0.8,
  },

  textInput: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: Dimensions.get("window").width - 50,
  },
  scrollview: {
    position: "absolute",
    width: "100%",
    height: "68%",
    backgroundColor: "#47474F",
    transform: [{ translateY: 200 - 20 }],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingTop: 10,
  },
  imagen: {
    width: 400,
    height: 200,
    position: "absolute",
    alignSelf: "center",
  },
  styleView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
