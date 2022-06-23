import React from "react";
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

export default ({ visibility, setear, inputs, subscribe, handleSubmit }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View style={styles.contenido}>
        <KeyboardAwareScrollView>
          <Text style={styles.subtitle}>Presupuesto</Text>
          <TextInput
            value={inputs.nombre}
            onChangeText={subscribe("nombre")}
            style={styles.input}
            placeholder="Nombre"
          />
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={inputs.descrip}
            onChangeText={subscribe("descrip")}
            style={styles.input2}
            placeholder="Descripción"
          />
          <TextInput
            value={inputs.monto}
            onChangeText={subscribe("monto_inicial")}
            style={styles.input}
            placeholder="Monto inicial"
            keyboardType="numeric"
          />
          <ButtonGradient
            onPress={handleSubmit}
            texto={"Listo"}
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
                height: 70,
                borderRadius: 25,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              },
              text: {
                fontSize: 20,
                color: "red",
                fontWeight: "bold",
              },
            }}
            colores={["#fff", "#fff"]}
          />
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    top: 70,
    alignSelf: "center",
    fontSize: 16,
    color: "gray",
  },
  input: {
    top: 70,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "95%",
    margin: 10,
    padding: 10,
    borderRadius: 13,
  },
  input2: {
    top: 70,
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    width: "95%",
    margin: 10,
    padding: 10,
    borderRadius: 13,
  },
  header: {
    width: "100%",
    height: 40,
    bottom: 15,
  },
  contenido: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(255,255,255,1)",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  btnSalir: {
    position: "absolute",
    bottom: -30,
    left: Dimensions.get("window").width - 105,
  },
  container: {
    width: "90%",
    marginTop: 100,
    alignSelf: "center",
  },
  button: {
    width: "100%",
    height: 70,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
