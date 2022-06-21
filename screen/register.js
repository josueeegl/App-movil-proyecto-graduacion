import React from "react";
import { Text, TextInput, View, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SvgTop, ButtonGradient, ButtonReg, ButtonGoogle } from "../styles";
import useForm from "../hooks/useForm";

export const RegisterScreen = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
    nombre: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  return (
    <KeyboardAwareScrollView style={styles.MainContainer}>
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
          value={inputs.email}
          onChangeText={subscribe("email")}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          value={inputs.password}
          onChangeText={subscribe("password")}
          style={styles.input}
          placeholder="contraseña"
        />
        <ButtonGradient onPress={handleSubmit} texto={"Registrarse"} />
        <Text style={styles.forgotPass}>O continúa con</Text>
        <ButtonGoogle />
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
    bottom: 90,
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
