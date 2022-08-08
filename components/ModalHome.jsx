import React, { useCallback, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Modal } from "react-native";
import { IconButton } from "react-native-paper";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const colors = [
  "#80B0C6",
  "#F5D2BC",
  "#F9F5F4",
  "#E5D7D7",
  "#EE805F",
  "#F7BDC9",
  "#327C7E",
  "#ffffff",
];

export const ModalHome = ({ item, visibility, setVisibility }) => {
  var Aleatorio = Math.floor(Math.random() * 8);
  return (
    <Modal
      onRequestClose={() => setVisibility(false)}
      animationType="slide"
      visible={visibility}
      transparent={true}
    >
      <View style={[styles(Aleatorio).container]}>
        <Image source={{ uri: item.imagen }} style={styles(Aleatorio).imagen} />
        <Text
          style={{
            color: "black",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 20,
            left: 20,
            maxWidth: "90%", 
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 16,
            fontWeight: "900",
            marginTop: 40,
            maxWidth: "80%",
            textAlign:"center"
          }}
        >
          {item.descripcion}
        </Text>
        <IconButton
          icon="close"
          color="#393943"
          size={50}
          onPress={() => setVisibility(false)}
          style={styles(Aleatorio).btnContainer}
        />
      </View>
    </Modal>
  );
};

const styles = (Aleatorio) =>
  StyleSheet.create({
    container: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: 10,
      width: width,
      height: height - 10,
      backgroundColor: colors[Aleatorio],
      zIndex: 1,
    },
    imagen: {
      alignSelf: "flex-end",
      height: 170,
      width: "100%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    btnContainer: {
      position: "absolute",
      top: -10,
      right: -5,
      zIndex: 1,
    },
  });
