import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Animated,
  View,
  Dimensions,
  Alert,
} from "react-native";
import { IconButton } from "react-native-paper";
const ITEM_SIZE = 70 + 20 * 3;
const { width } = Dimensions.get("window");

export default ({
  id,
  nombre,
  onPress,
  monto,
  fecha,
  descrip,
  editar,
  index,
  scrollY,
  onDelete,
  setLoading,
}) => {
  const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
  const OpactityinputRange = [
    -1,
    0,
    ITEM_SIZE * index,
    ITEM_SIZE * (index + 1.5),
  ];

  const scale = scrollY.interpolate({
    inputRange: OpactityinputRange,
    outputRange: [1, 1, 1, 0],
  });
  const opacity = scrollY.interpolate({
    
    inputRange,
    outputRange: [1, 1, 1, 0],
  });
  const borrar = () => {
    Alert.alert("¿Quieres eliminarlo?", "", [
      {
        text: "NO",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "SI",
        onPress: () => {
          console.log(id);
          onDelete(id, "https://yourfinz.herokuapp.com/presupuesto", setLoading);
        },
      },
    ]);
  };
  const alterar = () => {
    editar(monto, descrip, nombre, id);
  }
  return (
    <Animated.View
      style={{
        width: "98%",
        height: 120,
        alignSelf: "center",
        flexDirection: "row",
        padding: 10,
        paddingLeft: 20,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "#2E323D",

        opacity,
        transform: [{ scale }],
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={onPress} style={{ width: "80%" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              opacity: 0.9,
              marginRight: 10,
            }}
          >
            {nombre}
          </Text>
          <Text
            style={{
              fontSize: 18,
              opacity: 0.7,
              color: "#FFDB56",
            }}
          >
            Q{monto}
          </Text>
          <Text
            style={{
              fontSize: 18,
              opacity: 0.7,
              color: "#eee",
              marginTop: 5,
            }}
          >
            {fecha.toString().split("T")[0]}
          </Text>
        </TouchableOpacity>

        <View>
          <IconButton
            icon="delete"
            color="#EF5350"
            size={30}
            style={{
              position: "absolute",
              right: width - 400,
              top: -15,
              alignSelf: "flex-end",
            }}
            onPress={borrar}
          />
          <IconButton
            icon="square-edit-outline"
            color="#65D271"
            size={30}
            style={{ position: "absolute", right: width - 445, top: -15 }}
            onPress={alterar}
          />
          <IconButton
            icon="arrow-right-circle"
            color="#4F93BC"
            size={30}
            style={{ position: "absolute", right: width - 490, top: -15 }}
            onPress={onPress}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 90,
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
  },
  textMonto: {
    fontSize: 18,
    color: "#4F93BC",
  },
  textFecha: {
    fontSize: 14,
    color: "red",
  },
  text: {
    fontSize: 16,
  },
});
