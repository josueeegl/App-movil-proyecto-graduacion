import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Apploader } from "../components";
import { clickDelete } from "../functions";
import { dominio } from "../config";
import { onDelete } from "../hooks";

export const OPScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState("");

  AsyncStorage.getItem("email").then((item) => {
    setEmail(item);
    AsyncStorage.getItem("token").then(async (x) => {
      const response = await fetch(`http://${dominio}:3000/user${email}`, {
        method: "GET",
        headers: {
          authorization: x,
        },
      });
      if (response.status == 200) {
        const data = await response.json();
        setLoader(false);
        setNombre(data[0].nombre);
        setId(data[0]._id);
      }
    });
  });

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/josueeegl/image/upload/v1657165663/yourFinz/avatar_zgqlbr.png",
          }}
          style={{ width: 200, height: 200, borderRadius: 100 / 2 }}
        />
      </View>
      <View style={styles.viewTag}>
        <Text style={styles.tag}>NOMBRE</Text>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={nombre.toUpperCase()}
          style={styles.tagInput}
        />
      </View>
      <View style={styles.viewTag}>
        <Text style={styles.tag}>CORREO ELECTRÓNICO</Text>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={email}
          style={styles.tagInput}
        />
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("token");
            navigation.navigate("OnBoarding");
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
            CERRAR SESIÓN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => clickDelete(
            setLoader,
            onDelete,
            id,
            `http://${dominio}:3000/user`,
            navigation,
            "OnBoarding",
            setLoading
          )}
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
            ELIMINAR CUENTA
          </Text>
        </TouchableOpacity>
      </View>
      {loader ? <Apploader /> : null}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393943",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100 / 2,
  },
  containerImage: {
    marginTop: 60,
    marginBottom: 15,
    alignSelf: "center",
  },
  tag: {
    fontSize: 10,
    letterSpacing: 2,
    color: "white",
    fontWeight: "500",
    opacity: 0.7,
  },
  tagInput: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
  },
  viewTag: {
    marginTop: 20,
    alignSelf: "center",
    width: "90%",
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  viewButtons: {
    marginTop: 20,
    alignSelf: "center",
    width: "90%",
    padding: 15,
    alignItems: "center",
  },
});
