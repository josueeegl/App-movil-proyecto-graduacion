import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Modal,
  View,
  TextInput,
  Text,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { IconButton } from "react-native-paper";
import { ButtonGradient } from "../styles";

export default ({
  visibility,
  setear,
  inputs,
  subscribe,
  handleSubmit,
  texto,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "100%" }}>
        <View
          style={{
            backgroundColor: "#47474F",
            borderRadius: 10,
            margin: 30,
            height: 300,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholderTextColor={"white"}
            value={inputs.nombre}
            onChangeText={subscribe("nombre")}
            style={styles.input}
            placeholder="Nombre"
          />
          <TextInput
            placeholderTextColor={"white"}
            multiline={true}
            numberOfLines={4}
            value={inputs.descrip}
            onChangeText={subscribe("descrip")}
            style={styles.input2}
            placeholder="Descripción..."
          />
          <ButtonGradient
            onPress={handleSubmit}
            texto={texto}
            estilos={styles}
          />
          <ButtonGradient
            onPress={setear}
            texto={"Cancelar"}
            estilos={{
              container: {
                width: "90%",
                marginTop: 10,
                alignSelf: "center",
              },
              button: {
                width: "100%",
                height: 50,
                borderRadius: 25,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              },
              text: {
                fontSize: 18,
                color: "#C75256",
                fontWeight: "bold",
                opacity: 0.8,
              },
            }}
            colores={["#393943", "#393943"]}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "95%",
    margin: 10,
    padding: 10,
    color: "white",
    backgroundColor: "#393943",
    borderRadius: 8,
  },
  input2: {
    height: 80,
    width: "95%",
    margin: 10,
    padding: 10,
    color: "white",
    backgroundColor: "#393943",
    borderRadius: 8,
  },
  header: {
    width: "100%",
    height: 40,
    bottom: 15,
  },
  contenido: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "stretch",
    justifyContent: "center",
  },

  btnSalir: {
    position: "absolute",
    bottom: -30,
    left: Dimensions.get("window").width - 105,
  },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
