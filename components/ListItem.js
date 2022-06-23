import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Animated,
  View,
  Dimensions,
} from "react-native";
import { IconButton } from "react-native-paper";
const ITEM_SIZE = 70 + 20 * 3;

export default ({
  nombre,
  onPress,
  monto,
  fecha,
  onLongPress,
  index,
  scrollY,
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
  return (
    <Animated.View
      style={{
        width: "98%",
        height: 100,
        alignSelf: "center",
        flexDirection: "row",
        padding: 10,
        paddingLeft: 20,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "rgba(255,255,255,0.9)",

        opacity,
        transform: [{ scale }],
      }}
    >
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={onPress}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#212F3D",
                opacity: 0.9,
              }}
            >
              {nombre}
            </Text>
          </TouchableOpacity>

          <IconButton
            icon="square-edit-outline"
            color="#4F93BC"
            size={30}
            style={{ position: "absolute", right: -60 }}
            onPress={onLongPress}
          />
          <IconButton
            icon="arrow-right-circle"
            color="#4F93BC"
            size={30}
            style={{ position: "absolute", right: -105 }}
            onPress={onPress}
          />
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 15 }}
          onPress={onPress}
        >
          <Text
            style={{
              fontSize: 18,
              opacity: 0.7,
              color: "#4F93BC",
              marginRight: 100,
            }}
          >
            monto
          </Text>
          <Text style={{ fontSize: 18, opacity: 0.7, color: "#0099cc" }}>
            fecha
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 70,
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
