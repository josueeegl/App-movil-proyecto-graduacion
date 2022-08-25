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
//const url = `http://${dominio}:3000/transacciones/resumen`;
const url = `${dominio}/informacion`;

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


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {loading ? (
        <Apploader />
      ) : (
        <View style={{ width: "100%", height: "100%", top: StatusBar.length }}>
          {info ? (
            <>
              <HeaderTransactions totales={data[1] ? data[1] : "0"} />
            </>
          ) : (
            <HeaderTransactions totales={"0"} />
          )}
          <Stories
            data={data[0]}
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
