//PART ONE
import fs from "fs";

//read input document
const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");
console.log(input);
input.forEach((ele, index, array) => {
  array[index] = array[index].split("");
});

let total = 0;
console.log("ele", input[0]);
input.forEach((ele, i, inpArray) => {
  const numbers = inpArray[i].match(/\d+/g);
  console.log(i, numbers);
  let next = 0;
  numbers?.map((number) => {
    let isAdjacentToSymbol = false;
    let numBegIndex = inpArray[i].indexOf(number, next);
    next = numBegIndex + 1;
    let numEndIndex = numBegIndex + number.length;

    // Check the surrounding area of the current number
    for (let y = i - 1; y <= i + 1; y++) {
      for (let x = numBegIndex - 1; x <= numEndIndex; x++) {
        // Check if the coordinates are within the bounds of the array
        if (y >= 0 && y < inpArray.length && x >= 0 && x < ele.length) {
          // Check if the character at the current position is not a digit or a period
          if (isNaN(parseInt(inpArray[y][x])) && inpArray[y][x] != ".") {
            isAdjacentToSymbol = true;
          }
        }
      }
    }
    if (isAdjacentToSymbol) {
      total += parseInt(number);
    }
  });
});

console.log(total);

function partOne(data) {
  let total = 0;

  for (let lineIndex = 0; lineIndex < data.length; lineIndex++) {
    const numbers = data[lineIndex].match(/\d+/g);
    console.log(numbers);
    if (numbers != null) {
      let nextStart = 0;
      for (let number of numbers) {
        let partOfSum = false;
        let numberStart = data[lineIndex].indexOf(number, nextStart);
        nextStart = numberStart + 1;
        let numberEnd = numberStart + number.length;
        for (let y = lineIndex - 1; y <= lineIndex + 1; y++) {
          for (let x = numberStart - 1; x <= numberEnd; x++) {
            if (
              y >= 0 &&
              y < data.length &&
              x >= 0 &&
              x < data[lineIndex].length
            ) {
              if (isNaN(parseInt(data[y][x])) && data[y][x] != ".") {
                partOfSum = true;
              }
            }
          }
        }
        if (partOfSum) {
          total += parseInt(number);
        }
      }
    }
  }

  return total;
}

const res = partOne(input);

console.log(res);
