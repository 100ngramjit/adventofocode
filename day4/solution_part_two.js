//add count to each

import fs from "fs";

//read input document
const input = fs.readFileSync("./input.txt", "utf-8")?.trim()?.split("\n");

//data extraction and formatting fron the input
input.forEach((item, index, array) => {
  array[index] = item.split(":")[1].trim().split("|");
  array[index].forEach((ele, i, arr) => {
    arr[i] = ele.trim().replaceAll("  ", " ").split(" ");
  });
});

var instances = [];
input.forEach((ele) => {
  instances.push(1);
});
//counting the number of times
input.forEach((item, index, array) => {
  const winningNumbers = item[0];
  const presentNumbers = item[1];
  let count = 0;

  // Loop through elements of present numbers
  presentNumbers.forEach((numberToCheck) => {
    // Check if the number is present in winning numbers
    if (winningNumbers.includes(numberToCheck)) {
      count++;
    }
  });
  //increment instances of next cards based on the current matching numbers
  for (var i = index + 1; i <= index + count; i++) {
    instances[i] = instances[index] + instances[i]; //issue
  }
});

console.log("instances", instances);
const result = instances.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(result);
