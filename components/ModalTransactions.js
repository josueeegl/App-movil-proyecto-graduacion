import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Modal,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { IconButton } from "react-native-paper";
import { ButtonGradient } from "../styles";
import { ButtonGroup } from "../components/ButtonGrup";
import { PickerCategory } from "../components/PickerCategoria";
import { PickerPago } from "../components/PickerPago";
import { PickerDate } from "../components/PickerDate";
import { PickerImage } from "../components/PickerImage";
import { Apploader } from "../components/loader";
import { onSubmit } from "../hooks/fetchPostTrans";

export default ({ visibility, setVisibility, ID, setLoading }) => {
  const [selectedType, setSelectedType] = useState(1);
  const [category, setCategory] = useState();
  const [pago, setPago] = useState();
  const [fecha, setFecha] = useState(new Date());
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const [image, setImage] = useState({});
  const [loader, setLoader] = useState(false);

  const setear = () => {
    if (visibility === true) {
      setDescripcion("");
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  const clickType = (item) => {
    setSelectedType(item);
  };

  const values = {
    presupuesto_id: ID,
    nombre: category,
    descrip: descripcion,
    valor: valor,
    tipo: selectedType === 0 ? "Gasto" : "Ingreso",
    tipo_pago: pago || "",
    fecha: fecha,
  };

  const enviar = () => {
    onSubmit(
      "http://192.168.37.222:3000/transacciones",
      image,
      values,
      setear,
      setLoader
    );
  };

  return (
    <Modal animationType="slide" visible={visibility}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <ButtonGroup buttons={["GASTO", "INGRESO"]} afterClick={clickType} />
          <PickerCategory
            selectedType={selectedType}
            setCategory={setCategory}
          />
          <TextInput
            placeholderTextColor={"white"}
            style={styles.textInput}
            multiline={true}
            numberOfLines={1}
            placeholder="Descripción..."
            onChangeText={setDescripcion}
            value={descripcion}
          />
          <Text
            style={{
              fontSize: 14,
              color: "white",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Valor
          </Text>
          <TextInput
            placeholderTextColor={"white"}
            style={styles.textInput}
            placeholder="0.0"
            onChangeText={setValor}
            value={valor}
            keyboardType="numeric"
          />
          <PickerPago setPago={setPago} visible={selectedType} pago={pago} />
          <PickerDate setFecha={setFecha} />
          <PickerImage afterClick={setImage} />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              width: "90%",
              backgroundColor: "#47474F",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              borderRadius: 5,
            }}
          >
            <TouchableOpacity onPress={setear}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#C75256",
                  fontWeight: "bold",
                  opacity: 0.8,
                  marginHorizontal: 10,
                }}
              >
                Cancelar
              </Text>
            </TouchableOpacity>
            <IconButton
              icon="check-underline-circle"
              color="#66BA69"
              size={50}
              onPress={enviar}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      {loader ? <Apploader /> : null}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#393943",
  },
  textInput: {
    padding: 10,
    color: "white",
    marginTop: 10,
    backgroundColor: "#47474F",
    borderRadius: 2,
  },
});
