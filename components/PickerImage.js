import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Platform,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { IconButton } from "react-native-paper";

export default ({ afterClick }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permiso denegado!");
      }
    }
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    afterClick(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const PickImage2 = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 2],
      quality: 1,
    });
    afterClick(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 10, alignItems: "center" }}>
      <Text style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)", fontWeight: "bold" }}>
        ¿Quieres agregar una imagen?
      </Text>
      <View>
        {image ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              width: "90%",
            }}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
            <IconButton
              icon="image-off"
              color="#4F93BC"
              size={40}
              onPress={() => setImage(null)}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
            }}
          >
            <IconButton
              icon="image-search"
              color="#4F93BC"
              size={45}
              onPress={PickImage}
            />
            <IconButton
              icon="camera-image"
              color="#4F93BC"
              size={45}
              onPress={PickImage2}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginTop: 5,
    backgroundColor: "#47474F",
    fontSize: 14,
    color: "white",
    width: 300,
    padding: 5,
    borderRadius: 15,
  },
  pick: {
    padding: 10,
    color: "white",
    marginTop: 10,
    backgroundColor: "#47474F",
    borderRadius: 2,
  },
});
