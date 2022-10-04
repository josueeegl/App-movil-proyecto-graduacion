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
  SectionList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ModalHome } from "../components/ModalHome";

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

export default ({ data, visibility, setVisibility, setDataItem }) => {
  var Aleatorio = Math.floor(Math.random() * 10);

  return (
    <SectionList
      style={{ marginBottom: 60, marginTop: 10 }}
      keyExtractor={(item, index) => index.toString()}
      sections={data}
      renderItem={({ item }) => (
        
        <ScrollView
          style={{flex: 1, marginLeft: 10, marginRight: 10, }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {item.map((item, index) => {
            var Aleatorio = Math.floor(Math.random() * 10);
            return (
              <TouchableOpacity
                style={{ padding: 5, width: 100, maxHeight: 170 }}
                key={index}
                onPress={() => {
                  setVisibility(true);
                  setDataItem(item);
                }}
              >
                <LinearGradient
                  colors={[colors[Aleatorio], colors[Aleatorio]]}
                  style={{ padding: 2, borderRadius: 15 }}
                >
                  <Image
                    source={{ uri: item.imagen }}
                    style={{
                      height: 110,
                      width: "100%",
                      borderRadius: 15,
                    }}
                  />
                </LinearGradient>
                <Text style={style.userImage}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
      renderSectionHeader={({ section }) => (
        <View>
          <Text
            style={{
              padding: 10,
              borderRadius: 10,
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
              maxWidth: "90%"
            }}
          >
            {section.title}
          </Text>
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  userImage: {
    height: 80,
    textAlign: "center",
    fontSize: 10,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
