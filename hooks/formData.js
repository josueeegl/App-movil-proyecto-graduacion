export const formData = (values, image) => {
  const DATA = new FormData();
  DATA.append("presupuesto_id", values.presupuesto_id);
  DATA.append("nombre", values.nombre);
  DATA.append("descrip", values.descrip);
  DATA.append("valor", values.valor);
  DATA.append("tipo", values.tipo);
  DATA.append("tipo_pago", values.tipo_pago);
  DATA.append("fecha", values.fecha.toString());

  if (Object.entries(image).length !== 0) {
    const ft = image.uri.split(".")[3];
    DATA.append("imagen", {
      uri: image.uri,
      name: values.nombre + "." + ft,
      type: image.type + "/jepg",
    });
  }

  return DATA;
};
