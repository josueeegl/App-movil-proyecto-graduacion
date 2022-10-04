import { useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export const pdf = (data, totales, nombre_presupuesto) => {
  var h = "";
  const ht1 = html1(nombre_presupuesto);
  const tot = `
  <tr>
    <td class="totales"></td>
    <td class="totales"></td>
    <td class="totales">TOTALES</td>
    <td class="ingreso">Q ${totales[0]}</td>
    <td class="gasto">Q ${totales[1]}</td>
  </tr>`;
  data.map((section) => {
    return section.data.forEach((item) => {
      h += `
      <tr>
        <td>${item.descrip}</td>
        <td>${item.nombre}</td>
        <td>${section.title}</td>
        <td>${item.tipo !== "Ingreso" ? "" : "Q " + item.valor}</td>
        <td>${item.tipo !== "Gasto" ? "" : "Q " + item.valor}</td>
      </tr>`;
    });
  });

  generarPDF(ht1 + h + tot + html2, nombre_presupuesto);
};

let generarPDF = async (html, name) => {
  const file = await printToFileAsync({
    html: html,
    base64: false,
    name:name
  });
  await shareAsync(file.uri);
};
const html1 = (title) => {
  const ht = `
    <html>
  <body>
  <div class="divH">
      <h1>Presupuesto ${title}</h1>
      <img
        class="imgH"
        src="https://res.cloudinary.com/josueeegl/image/upload/v1664894111/yourFinz/logotras_voet8u.png"
      />
    </div>
    <div>
    <table id="tabla">
      <tr>
        <th>Descripción</th>
        <th>Categoria</th>
        <th>Fecha</th>
        <th>Ingreso</th>
        <th>Gasto</th>
      </tr>
    `;
  return ht;
};

const html2 = `</table>
</div>
  <style type="text/css">
    table {
      width: 700px;
      background-color: white;
      border-collapse: collapse;
      border-radius: 4px;
      color: black;
      overflow: auto;
      font-size: 14px;
    }
    table th {
      background-color: #eee;
      color: black;
      text-align: left;
      padding: 5px;
    }
    table td {
      border: solid 1px #ddd;
      padding: 5px;
    }
    .totales {
      border: 0;
      font-style: italic;
      font-size: 16;
      font-weight: bold;
    }
    .ingreso{
      color:forestgreen;
      font-size: 16;
      font-weight: bold;
      font-style: italic;
    }
    .gasto{
      color: red;
      font-size: 16;
      font-weight: bold;
      font-style: italic;
    }
    .imgH {
      width: 90px;
      height: 90px;
    }
    .divH{
      width: 700px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin: 10px;
    }
  </style>
</body>
</html>
`;
