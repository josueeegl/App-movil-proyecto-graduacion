import React, { useState, useEffect } from "react";
import {
  Alert,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions, StatusBar
} from "react-native";
const { width, height } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SvgTop, ButtonGradient, ButtonReg, ButtonGoogle } from "../styles";
import { onSubmitReg, useForm, logGoogle } from "../hooks";


export const RegisterScreen = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
    nombre: "",
  };
  const { subscribe, inputs, handleSubmit } = useForm(
    initialState,
    onSubmitReg,
    navigation
  );

  
  return (
    <KeyboardAwareScrollView style={styles.MainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="black"/>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Regístrate</Text>
        <Text style={styles.subtitle}>¡El futuro es hoy!</Text>
        <TextInput
          value={inputs.nombre}
          onChangeText={subscribe("nombre")}
          style={styles.input}
          placeholder="Nombre"
        />
        <TextInput
          autoCapitalize="none"
          value={inputs.email}
          onChangeText={subscribe("email")}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          autoCapitalize="none"
          value={inputs.password}
          onChangeText={subscribe("password")}
          style={styles.input}
          placeholder="contraseña"
          secureTextEntry={true}
        />
        <ButtonGradient onPress={handleSubmit} texto={"Registrarse"} />
        <ButtonReg
          onPress={() => navigation.navigate("Login")}
          texto={"Volver al inicio"}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    bottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    margin: 10,
    padding: 10,
    borderRadius: 13,
  },
  title: {
    fontSize: 30,
    color: "#34434D",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  forgotPass: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
});
