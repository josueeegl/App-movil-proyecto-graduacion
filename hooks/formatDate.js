export const formatear = (dia) => {
  if (dia.startsWith("Mon")) return "Lunes";
  if (dia.startsWith("Tu")) return "Martes";
  if (dia.startsWith("We")) return "Miércoles";
  if (dia.startsWith("Th")) return "Jueves";
  if (dia.startsWith("Fr")) return "Viernes";
  if (dia.startsWith("Sa")) return "Sábado";
  if (dia.startsWith("Su")) return "Domingo";
};
export const formatearYear = (año) => {
  if (año.startsWith("Jan")) return "Enero";
  if (año.startsWith("Feb")) return "Febrero";
  if (año.startsWith("Ma")) return "Marzo";
  if (año.startsWith("Ap")) return "Abril";
  if (año.startsWith("Jun")) return "Junio";
  if (año.startsWith("Jul")) return "Julio";
  if (año.startsWith("Au")) return "Agosto";
  if (año.startsWith("Sep")) return "Septiembre";
  if (año.startsWith("Oc")) return "Octubre";
  if (año.startsWith("Nov")) return "Noviembre";
  if (año.startsWith("Dec")) return "Diciembre";
};
