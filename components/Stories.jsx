import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const colors = [
  "#80B0C6",
  "#F5D2BC",
  "#F9F5F4",
  "#E5D7D7",
  "#EE805F",
  "#F7BDC9",
  "#327C7E",
  "#ffffff",
  "#bc2a8d",
  "#e95950",
];

export default ({ data, setDetail, navigation }) => {
  return (
    <View>
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          var Aleatorio = Math.floor(Math.random() * 10);
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
              }}
              key={index}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HomeDetail", { item: item });
                }}
              >
                <LinearGradient
                  colors={[colors[Aleatorio], colors[Aleatorio]]}
                  style={{ padding: 2, borderRadius: 15 }}
                >
                  <Text style={style.userImage}>{item.name}</Text>
                  <Image
                    source={{ uri: item.imagen }}
                    style={{ height: 50, width: 50, opacity: 0.5, alignSelf: "center", bottom: 20 }}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  userImage: {
    padding: 10,
    height: 80,
    maxWidth: 130,
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "#393943",
    zIndex: 1,
  },
});
