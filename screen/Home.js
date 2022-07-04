import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, FlatList } from "react-native";
import { styles } from "../styles";
import { Apploader } from "../components/loader";

export const HomeScreen = () => {
  const [loader, setLoader] = useState(true);
  return <View style={styles.container}>{loader ? <Apploader /> : null}</View>;
};
