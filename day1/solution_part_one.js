//PART ONE
import fs from "fs";

//read input document
const input = fs.readFileSync("./input.txt", "utf-8")?.trim()?.split("\n");

const wordToNum = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

//replace all alphabets
const numberArr = [];
input.map((ele) => {
  console.log(Object.keys(wordToNum));
  ele = ele.replace(/[a-z]/g, "");
  numberArr.push(ele);
});

//store first and last digits
const digitArr = [];
numberArr.map((ele) => {
  digitArr.push(ele[0] + ele[ele.length - 1]);
  console.log(ele[0] + ele[ele.length - 1]);
});
//console.log(digitArr);

//add sum of all elements
let sum = 0;
digitArr.map((ele) => {
  sum = sum + Number(ele);
});

console.log("sum", sum);
