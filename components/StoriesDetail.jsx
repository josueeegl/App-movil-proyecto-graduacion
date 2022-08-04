import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default ({ viewDetail, setViewDetail, detail, setDetail }) => {
  return (
    <>
      {viewDetail ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 1,
            width: width,
            height: height,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
                          height: "80%",
              bottom: 25,
              width: "90%",
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}
          >
            <Image
              source={{ uri: detail.imagen }}
              style={{
                alignSelf: "center",
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
            />
            <Text style={{position: "absolute", zIndex: 1,}}>{detail.name}</Text>
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#393943",
    marginBottom: 80,
  },
});
