import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (values, url, navigation, setLoader, pantalla, setLoading) => {
  AsyncStorage.getItem("token").then((x) => {
    if (x) {
      fetch(url + values, {
        method: "DELETE",
        headers: {
          authorization: x,
        },
      }).then((x) => {
        if (x.status !== 204) {
          setLoading(true);
          setLoader(false);
          return Alert.alert("Error :(", "Hubo un problema al eliminarlo");
        }
        setLoading(true);
        setLoader(false);
        navigation.navigate(pantalla);
      });
    }
  });
};
