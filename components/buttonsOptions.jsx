import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";

export const ButtonsOptions = ({
  fDelete,
  fModificar,
  styleButtons,
  colorEdit,
  fAtras,
  nameIcon,
  size,
  styleView,
}) => {
  return (
    <View style={styleView || null}>
      <IconButton
        icon="delete"
        color="#EF5350"
        size={size}
        style={styleButtons !== null ? styleButtons.delete : null}
        onPress={fDelete}
      />
      <IconButton
        icon="square-edit-outline"
        color={colorEdit}
        size={size}
        style={
          styleButtons !== null ? styleButtons.modificar : null
        }
        onPress={fModificar}
      />
      <IconButton
        icon={nameIcon}
        color="#4F93BC"
        size={size}
        style={
          styleButtons !== null ? styleButtons.regresar : null
        }
        onPress={fAtras}
      />
    </View>
  );
};
