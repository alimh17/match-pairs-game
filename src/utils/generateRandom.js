import _ from "lodash";
import { data } from "../data/data";

export const generator = () => {
  let number = [];
  let newItem = [];
  let finishSet = [];
  for (let i = 1; newItem.length < 20; i++) {
    const random = Math.floor(Math.random() * 20);
    number.push(random);
    newItem = _.uniq(number);
    finishSet = _.chunk(newItem, 2);
  }

  finishSet.map((item, index) => {
    return item.push(data[index]);
  });

  return finishSet;
};
