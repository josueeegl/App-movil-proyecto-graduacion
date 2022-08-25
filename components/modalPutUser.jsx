import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { dominio } from "../config";

export default ({
  visibility,
  setVisibility,
  setNombre,
  setEmail,
  email,
  nombre,
  id,
}) => {
  const [password, setPassword] = useState("");
  const actualizarUser = () => {
    const data = {};
    nombre !== "" ? (data.nombre = nombre) : null;
    email !== "" ? (data.email = email) : null;
    fetch(`${dominio}/user/?id=${id}&password=${password}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((x) => {
        if (x.status === 204) {
          Alert.alert("Modificaciones", "Cambios guardados");
        } else {
          Alert.alert("Hubo un problema", "Verifica la contraseña");
        }
      })
      .catch((e) => {
        Alert.alert("Error :(", e);
      });
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "100%" }}>
        <View
          style={{
            backgroundColor: "#47474F",
            borderRadius: 10,
            margin: 30,
            height: 200,
            alignItems: "center",
            top: 50,
          }}
        >
          <TextInput
            placeholderTextColor={"white"}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Ingresa la contraseña"
            secureTextEntry={true}
          />
          <View style={styles.viewButtons}>
            <TouchableOpacity
              onPress={() => {
                if (password === "") {
                  Alert.alert("Modificaciones", "Ingresa la contraseña");
                } else {
                  actualizarUser();
                }
              }}
              style={{
                marginBottom: 15,
                backgroundColor: "#4F93BC",
                padding: 10,
                borderRadius: 10,
                width: "85%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  letterSpacing: 2,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                ACTUALIZAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setNombre("");
                setEmail("");
                setVisibility(false);
              }}
              style={{
                padding: 10,
                borderRadius: 10,
                width: "85%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  letterSpacing: 2,
                  color: "#C75256",
                  fontWeight: "bold",
                  opacity: 0.9,
                }}
              >
                CANCELAR
              </Text>
            </TouchableOpacity>
          </View>
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
  viewButtons: {
    alignSelf: "center",
    width: "90%",
    padding: 15,
    alignItems: "center",
  },
});
