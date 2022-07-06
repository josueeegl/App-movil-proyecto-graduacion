import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async (
  url,
  data,
  setear,
  setLoader,
  tipo,
  setLoading
) => {
  AsyncStorage.getItem("token").then((x) => {
    setLoader(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": tipo,
        authorization: x,
      },
      body: data,
    }).then((x) => {
      if (x.status == 201) {
        setLoader(false);
        return Alert.alert("Exito!", "Se creo correctamente", [
          {
            text: "Ok",
            onPress: () => {
              setLoading(true);
              setear();
            },
          },
        ]);
      }
      Alert.alert("Error :(", "No se pudo crear");
    });
  });
};
