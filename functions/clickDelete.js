import { Alert } from "react-native";

export const clickDelete = (
  setLoader,
  onDelete,
  id,
  url,
  navigation,
  pantalla,
  setLoading
) => {
  return Alert.alert("¿Quieres eliminarlo?", "Se eliminarán los datos asociados a este", [
    {
      text: "NO",
      style: "cancel",
    },
    {
      text: "SI",
      onPress: () => {
        setLoader(true);
        onDelete(id, url, navigation, setLoader, pantalla, setLoading);
      },
    },
  ]);
};
