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
  ModalHome,
} from "../components";
import { fetchGet } from "../hooks";
import { dominio } from "../config";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const url = `http://${dominio}:3000/transacciones/resumen`;

export const HomeScreen = ({ navigation }) => {
  const [DataItem, setDataItem] = useState({});
  const [visibility, setVisibility] = useState(false);
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
      title: "Conceptos clave",
      data: [
        [
          {
            name: "Isabel",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
          {
            name: "Isabel",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
          {
            name: "Educación Financiera",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
          {
            name: "Cultura Financiera",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
          {
            name: "Ahorro",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
        ],
      ],
    },
    {
      title: "Como ahorrar",
      data: [
        [
          {
            name: "Isabel",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
          {
            name: "Isabel",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
        ],
      ],
    },
    {
      title: "Estrategias para tener cultura financiera",
      data: [
        [
          {
            name: "Isabel",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
          {
            name: "Isabel",
            autor: "Josueé GRCIA",
            url: "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
            descripcion:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et minus deserunt tempore adipisci molestias atque ipsam, iusto vitae ullam maxime quam error fugiat accusamus.",
            imagen:
              "https://res.cloudinary.com/josueeegl/image/upload/v1659677226/yourFinz/fondo8_xypuoh.png",
          },
        ],
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {loading ? (
        <Apploader />
      ) : (
        <View style={{ width: "100%", height: "100%", top: StatusBar.length }}>
          {info ? (
            <>
              <HeaderTransactions totales={data} />
            </>
          ) : (
            <HeaderTransactions totales={"0"} />
          )}
          <Stories
            data={dat}
            visibility={visibility}
            setVisibility={setVisibility}
            setDataItem={setDataItem}
          />
        </View>
      )}
      {loader ? <Apploader /> : null}
      <ModalHome
        item={DataItem}
        visibility={visibility}
        setVisibility={setVisibility}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#393943",
    marginBottom: 10,
  },
});
