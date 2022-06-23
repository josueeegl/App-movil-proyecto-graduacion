import React, { useState } from "react";

export default (initialState, onSubmit, navigation, setear) => {
  const [inputs, setInputs] = useState(initialState);

  const subscribe = (field) => (value) => {
    setInputs({ ...inputs, [field]: value });
  };
  const handleSubmit = () => {
    onSubmit(inputs, navigation, setear);
  };
  return { subscribe, handleSubmit, inputs };
};
