import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  Text,
  Image,
  Alert,
} from "react-native";
import { DetailTransactions } from "../components/detailTransactions";

export const DetalleDinero = ({ navigation }) => {
  return <DetailTransactions navigation={navigation} pantalla={"Home"} />;
};
