import dayjs from "dayjs";
import { T5Day3HourDetail } from "../types";
import { DATE_FORMAT } from "@/constants/time";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

export const transform5Day3HourListToData = (list: T5Day3HourDetail[]) => {
  const newList = list.map((item) => {
    const group = dayjs(item.dt * 1000).format(DATE_FORMAT);

    return { ...item, group };
  });

  const dataObject: Record<string, T5Day3HourDetail[]> = {};

  newList.forEach((item) => {
    const group = item.group;

    if (!dataObject[group]) {
      dataObject[group] = [item];
    } else {
      dataObject[group] = [...dataObject[group], item];
    }
  });

  return dataObject;
};
