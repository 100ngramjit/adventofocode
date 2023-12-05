//PART ONE
import fs from "fs";

//read input document
const input = fs.readFileSync("./input.txt", "utf-8")?.trim()?.split("\n");

const maxColorValues = {
  red: 12,
  green: 13,
  blue: 14,
};

let sum = 0;

input.map((ele, index, array) => {
  array[index] = ele.split(":")[1].split(";");
  let skip = false;
  array[index].map((ele, index, array) => {
    array[index] = ele.split(",");
    // console.log(array[index]);
    const resultObject = {};
    array[index].map((ele, index, array) => {
      const [number, color] = ele.split(/\s+/).filter(Boolean);
      resultObject[color] = parseInt(number);
      //   console.log(resultObject);
    });
    array[index] = resultObject;
    // console.log(array[index], index);
    Object.keys(maxColorValues).map((ele, index, array) => {
      if (resultObject[ele] > maxColorValues[ele]) {
        skip = true;
      }
    });
  });
  if (skip === false) {
    sum += index + 1;
  }
});

console.log(sum);
