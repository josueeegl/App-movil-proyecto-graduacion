import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({ data, setDetail, navigation }) => {
  return (
    <View>
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              style={{ width: 85, padding: 5 }}
              onPress={() => {
                navigation.navigate("HomeDetail", { item: item });
              }}
              key={index}
            >
              <LinearGradient
                colors={["#bc2a8d", "#e95950"]}
                style={{ padding: 2, borderRadius: 35 }}
              >
                <Image source={{ uri: item.imagen }} style={style.userImage} />
              </LinearGradient>
              <Text style={style.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: "#fff",
    borderWidth: 4,
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    textTransform: "lowercase",
    marginTop: 5,
  },
});
