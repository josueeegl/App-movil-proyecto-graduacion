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
import { formatearYear, fetchPutTransaction, onDelete }from "../hooks";
import { dominio } from "../config";
import {  PickerDate, Apploader } from "../components";

export const detalleTrans = ({ navigation }) => {
  const items = navigation.getParam("items");
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
                maxLength={20}
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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <IconButton
              icon="arrow-left"
              color="#4F93BC"
              size={40}
              onPress={() => navigation.navigate("Detalle")}
            />
            <IconButton
              icon="square-edit-outline"
              color="white"
              size={40}
              onPress={() => {
                category.length !== 0 ? (data.nombre = category) : null;
                descripcion.length !== 0 ? (data.descrip = descripcion) : null;
                valor.length !== 0 ? (data.valor = valor) : null;
                tipoPago.length !== 0 ? (data.tipo_pago = tipoPago) : null;
                date ? (data.fecha = date) : null;

                if (Object.entries(data).length !== 0) {
                  fetchPutTransaction(
                    `http://${dominio}:3000/transacciones${items._id}`,
                    data,
                    navigation
                  );
                } else {
                  Alert.alert("Modificación", "No haz realizado cambios");
                }
              }}
            />

            <IconButton
              icon="delete"
              color="#EF5350"
              size={40}
              onPress={() => {
                console.log(items._id);
                Alert.alert("¿Quieres eliminarlo?", "", [
                  {
                    text: "NO",
                    style: "cancel",
                  },
                  {
                    text: "SI",
                    onPress: () => {
                      setLoader(true);
                      onDelete(
                        items._id,
                        `http://${dominio}:3000/transacciones`,
                        navigation,
                        setLoader
                      );
                    },
                  },
                ]);
              }}
            />
          </View>
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
    maxWidth: 170,
  },
  scrollview: {
    position: "absolute",
    width: "100%",
    height: "68%",
    backgroundColor: "#47474F",
    transform: [{ translateY: 200 - 20 }],
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 20,
    paddingTop: 10,
  },
  imagen: {
    width: 400,
    height: 200,
    position: "absolute",
    alignSelf: "center",
  },
});
