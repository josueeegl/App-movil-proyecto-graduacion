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
import {
  Apploader,
  HeaderTransactions,
  Stories,
  StoriesDetail,
} from "../components";
import { fetchGet } from "../hooks";
import { dominio } from "../config";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const url = `http://${dominio}:3000/transacciones/resumen`;

export const HomeScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const { setLoading, loading, info } = fetchGet(
    url,
    navigation,
    setLoader,
    setData
  );

  const dat = [
    {
      name: "Isabel",
      imagen:
        "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
    },
    {
      name: "Juan",
      imagen:
        "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
    },
    {
      name: "Juan",
      imagen:
        "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
    },
    {
      name: "Juan",
      imagen:
        "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
    },
    {
      name: "Juan",
      imagen:
        "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
    },
    {
      name: "Juan",
      imagen:
        "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
    },
    {
      name: "Juan",
      imagen:
        "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {loading ? (
        <Apploader />
      ) : (
        <ScrollView
          style={{ width: "100%", height: "100%", top: StatusBar.length }}
        >
          {info ? (
            <>
              <HeaderTransactions totales={data} />
            </>
          ) : (
            <HeaderTransactions totales={"0"} />
          )}
          <Stories
            data={dat}
            navigation={navigation}
          />
        </ScrollView>
      )}
      {loader ? <Apploader /> : null}
    </View>
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
