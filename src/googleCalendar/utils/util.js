import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
  month = ~~month;
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
};

export const getCurrentDay = (day) => {
  return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")
    ? "bg-blue-600 text-white rounded-full w-7"
    : "";
};
