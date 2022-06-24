import React, { useState } from "react";

export default (initialState, onSubmit, navigation, limpiar) => {
  const [inputs, setInputs] = useState(initialState);

  const subscribe = (field) => (value) => {
    setInputs({ ...inputs, [field]: value });
  };
  const handleSubmit = () => {
    onSubmit(inputs, navigation, limpiar);
  };
  return { subscribe, handleSubmit, inputs, setInputs };
};
