import React from "react";
import { StyleSheet, Dimensions, Modal, View  } from "react-native";

export default ({ children, visibility }) => {
  return (
      <Modal animationType="slide" transparent={true} visible={visibility}
          >
      <View  style={styles.ViewModal}>
        <View style={styles.contenido}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ViewModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contenido: {
    width: "100%",
    height: Dimensions.get('window').height - 70,
      
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 50,
    borderTopStartRadius: 20,
    borderTopEndRadius:20,
  },
});
