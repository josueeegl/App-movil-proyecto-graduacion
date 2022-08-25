import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "react-native-paper";
import * as Linking from "expo-linking";

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
        {item.autor ? (
          <Text
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontWeight:"800",
              fontSize: 14,
              left: 20,
              maxWidth: "90%",
            }}
          >
            {item.autor}
          </Text>
        ) : null}
        <Text
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 14,
            fontWeight: "900",
            marginTop: 20,
            maxWidth: "92%",
            textAlign: "center",
          }}
        >
          {item.descripcion}
        </Text>
        {item.url ? (
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}
            style={{
              flexDirection: "row",
              position: "absolute",
              alignSelf: "center",
              top: height - 80,
              padding: 15,
              borderRadius: 50,
              width: "60%",
              opacity: 0.9,
              backgroundColor: "#393943",
            }}
          >
            <IconButton
              icon="apple-keyboard-control"
              color="white"
              size={25}
              style={styles(Aleatorio).btnContainer2}
            />
            <Text
              style={{
                fontSize: 14,
                letterSpacing: 2,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                marginRight: 5,
              }}
            >
              Aprender más
            </Text>
          </TouchableOpacity>
        ) : null}
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
    btnContainer2: {
      position: "absolute",
      top: 7,
      right: 5,
    },
  });
