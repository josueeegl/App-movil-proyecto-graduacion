import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default ({ buttons, afterClick }) => {
  const [clickedId, setClickedId] = useState(1);
  const handleClick = (item, id) => {
    setClickedId(id);
    afterClick(id);
  };
  return (
    <View style={styles.container}>
      {buttons.map((buttonLabel, index) => {
        return (
          <TouchableOpacity
            onPress={(item) => handleClick(item, index)}
            key={index}
            style={[
              index === clickedId ? styles.buttonActive : styles.button,
              index === 0
                ? { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }
                : "",
              index === 1
                ? { borderTopRightRadius: 10, borderBottomRightRadius: 10 }
                : "",
            ]}
          >
            <Text style={index === clickedId ? styles.textActive : styles.text}>
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  button: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C75256",
    borderColor: "black",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonActive: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 0.5,
    borderColor: "black",
  },
  text: {
    color: "white",
  },
  textActive: {
    color: "white",
  },
});
