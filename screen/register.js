import React, { useState, useEffect } from "react";
import {
  Alert,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SvgTop, ButtonGradient, ButtonReg, ButtonGoogle } from "../styles";
import { onSubmitReg, useForm, logGoogle } from "../hooks";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

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

  const [accessToken, setAccessToken] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "651270985032-1b66b5p3001h0idg3k4eo80p767h77v7.apps.googleusercontent.com",
    iosClientId:
      "651270985032-oji9fogr16k8cm0e871imolu5q37meqa.apps.googleusercontent.com",
    expoClientId:
      "651270985032-ufqaq8njjs4uafhh34c43mfefqpdj7ag.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, []);

  async function getUserData() {
    await promptAsync({ showInRecents: true });
    if (accessToken) {
      await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((x) => x.json())
        .then((x) => {
          if (x) {
            console.log(x);
            Alert.alert(`Bienvenido ${x.name}`, "Registrado correctmente", [
              {
                text: "Ir al inicio",
                onPress: () => navigation.navigate("Login"),
              },
            ]);
          }
        });
    }
  }
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
