//PART TWO

import fs from "fs";

//read input document
const input = fs.readFileSync("./input.txt", "utf-8")?.trim()?.split("\n");

//mapping all the numbers to alphannumeric conditions with first and last letter intact to avoid lookahead
const wordToNum = {
  one: "o1e",
  two: "t2o",
  three: "thr3e",
  four: "fo4r",
  five: "fi5e",
  six: "s6x",
  seven: "sev7n",
  eight: "ei8ht",
  nine: "ni9e",
};

//replace all digits to numbers and removing all the alphabets in the end
const numberArr = [];
input.map((ele) => {
  console.log(Object.keys(wordToNum));
  Object.keys(wordToNum).map((digit) => {
    ele = ele.replaceAll(digit, wordToNum[digit]);
  });
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
