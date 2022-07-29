import * as fns from "date-fns";

export const FilterDates = (dateSelected) => {
  switch (dateSelected) {
    case "todo":
      return new Date("2018-01-01T00:00:00.000+00:00");
    case "hoy":
      return fns.sub(new Date(), { days: 1 });
    case "semana":
      return fns.sub(new Date(), { weeks: 1 });
    case "mes":
      return fns.sub(new Date(), { months: 1 });
    case "year":
      return fns.sub(new Date(), { years: 1 });
  }
};

export const formatDate = (day, month, year) => {
  let tempDate = new Date();
  if (
    tempDate.getDate() == day &&
    tempDate.getMonth()+1 == month &&
    tempDate.getFullYear() == year
  ) {
    return "Hoy";
  }
  switch (month) {
    case 1:
      return `${day} de enero del ${year}`;
    case 2:
      return `${day} de febrero del ${year}`;
    case 3:
      return `${day} de marzo del ${year}`;
    case 4:
      return `${day} de abril del ${year}`;
    case 5:
      return `${day} de mayo del ${year}`;
    case 6:
      return `${day} de junio del ${year}`;
    case 7:
      return `${day} de julio del ${year}`;
    case 8:
      return `${day} de agosto del ${year}`;
    case 9:
      return `${day} de septiembre del ${year}`;
    case 10:
      return `${day} de octubre del ${year}`;
    case 11:
      return `${day} de noviembre del ${year}`;
    case 12:
      return `${day} de diciembre del ${year}`;
  }
};
