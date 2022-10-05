import { useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { formatearYear, formatear } from "../hooks";

export const pdfHistorial = (data) => {
  var h = "",
    i = 0,
    j = 0;

  data.map((item) => {
    const fechayhora = new Date(item.fecha).toString().split(" ").splice(0, 4);
    const d = `${formatear(fechayhora[0])} ${fechayhora[2]} de ${formatearYear(
      fechayhora[1]
    )}`;
    i += item.tipo !== "Ingreso" ? 0 : parseInt(item.valor);
    j += item.tipo !== "Gasto" ? 0 : parseInt(item.valor);
    h += `
      <tr>
        <td>${item.descrip}</td>
        <td>${item.nombre}</td>
        <td>${d}</td>
        <td>${item.tipo !== "Ingreso" ? "" : "Q " + item.valor}</td>
        <td>${item.tipo !== "Gasto" ? "" : "Q " + item.valor}</td>
      </tr>`;
  });
  const tot = `
  <tr>
    <td class="totales"></td>
    <td class="totales"></td>
    <td class="totales">TOTALES</td>
    <td class="ingreso">Q ${i}</td>
    <td class="gasto">Q ${j}</td>
  </tr>`;
  generarPDF(ht + h + tot + html2);
};

let generarPDF = async (html, name) => {
  const file = await printToFileAsync({
    html: html,
    base64: false,
  });
  await shareAsync(file.uri);
};

const ht = `
    <html>
  <body>
  <div class="divH">
      <h1>Historial</h1>
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
