import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Apploader, ModalPutUser } from "../components";
import { ObtenerUser } from "../hooks";

export const OPScreen = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);
  const [loader, setLoader] = useState(true);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState();

  ObtenerUser(setLoader, setData, setId, navigation);

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
          placeholder={
            typeof data === "object" ? data[0].nombre.toUpperCase() : ""
          }
          style={styles.tagInput}
          value={nombre}
          onChangeText={setNombre}
        />
      </View>
      <View style={styles.viewTag}>
        <Text style={styles.tag}>CORREO ELECTRÓNICO</Text>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={typeof data === "object" ? data[0].email : ""}
          style={styles.tagInput}
          value={email}
          onChangeText={setEmail}
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
          onPress={() => {
            if (email !== "" || nombre !== "") {
              setVisibility(true);
            } else {
              Alert.alert(
                "No has realizado cambios",
                "Para modificar un elemento solo presiona en el"
              );
            }
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
            ACTUALIZAR DATOS
          </Text>
        </TouchableOpacity>
      </View>
      <ModalPutUser
        visibility={visibility}
        setVisibility={setVisibility}
        setNombre={setNombre}
        setEmail={setEmail}
        email={email}
        nombre={nombre}
        id={id}
      />
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
