import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (url, data, navigation, pantalla) => {
  AsyncStorage.getItem("token").then((x) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: x,
      },
      body: JSON.stringify(data),
    })
      .then((x) => {
        console.log(x.status);
        if (x.status == 204) {
          return Alert.alert("Exito!", "Cambios realizados", [
            {
              text: "Ok",
              onPress: () => navigation.navigate(pantalla),
            },
          ]);
        }
        Alert.alert("Error :(", "No se pudieron realizar los cambios");
      })
      .catch((e) => console.log(e.message));
  });
};
