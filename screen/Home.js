import React, { useState } from "react";
import {View} from "react-native";
import { styles } from "../styles";
import { Apploader } from "../components";

export const HomeScreen = () => {
  const [loader, setLoader] = useState(true);
  return <View style={styles.container}>{loader ? <Apploader /> : null}</View>;
};
