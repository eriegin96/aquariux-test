import { DATE_FORMAT, FULL_DATE_FORMAT, HOUR_FORMAT } from "@/constants/time";
import dayjs from "dayjs";

export const formatHour = (date: dayjs.ConfigType) => {
  return dayjs(date).format(HOUR_FORMAT).toString();
};

export const formatDate = (date: dayjs.ConfigType) => {
  return dayjs(date).format(DATE_FORMAT).toString();
};

export const formatFullDate = (date: dayjs.ConfigType) => {
  return dayjs(date).format(FULL_DATE_FORMAT).toString();
};
