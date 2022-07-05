import React, {useState} from "react";
import { Text, TextInput, View, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SvgTop, ButtonGradient, ButtonReg, ButtonGoogle } from "../styles";
import { onSubmitLog, useForm } from "../hooks";
import { Apploader } from "../components";

export const LoginScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };
  const { subscribe, inputs, handleSubmit } = useForm(
    initialState,
    onSubmitLog,
    navigation,
    setLoader
  );
  return (
    <>
    <KeyboardAwareScrollView style={styles.MainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Inicia sesión con tu cuenta</Text>
        <TextInput
          value={inputs.email}
          onChangeText={subscribe("email")}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          autoCapitalize="none"
          value={inputs.password}
          onChangeText={subscribe("password")}
          style={styles.input}
          placeholder="contraseña"
          secureTextEntry={true}
        />
        <ButtonGradient onPress={handleSubmit} texto={"Iniciar sesión"} />
        <Text style={styles.forgotPass}>O continúa con</Text>
        <ButtonGoogle />
        <Text style={styles.forgotPass}>¿No tienes una cuenta?</Text>
        <ButtonReg
          onPress={() => navigation.navigate("RegisterScreen")}
          texto={"Regístrate"}
        />
      </View>
      </KeyboardAwareScrollView>
      {loader ? <Apploader /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    bottom: 70,
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
    fontSize: 40,
    color: "#34434D",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  forgotPass: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
});
