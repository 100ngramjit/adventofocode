//PART ONE
import fs from "fs";

//read input document
const input = fs.readFileSync("./input.txt", "utf-8")?.trim()?.split("\n");
let sum = 0;
input.map((ele, index, array) => {
  array[index] = ele.split(":")[1].split(";");
  const minColorValues = {
    red: 0,
    green: 0,
    blue: 0,
  };
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
    // console.log(resultObject, "\n");
    Object.keys(minColorValues).map((ele, index, array) => {
      if (minColorValues[ele] < resultObject[ele]) {
        minColorValues[ele] = resultObject[ele];
      }
    });
  });
  let prod = 1;
  Object.values(minColorValues).map((ele) => {
    prod *= ele;
  });
  console.log("prod", prod);
  sum = sum + prod;
});
console.log(sum);
