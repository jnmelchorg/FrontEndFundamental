
const firstArray = [];

firstArray[0] = "strings";
firstArray[1] = 1.001;
firstArray[2] = 2
firstArray[3] = true;
console.log(firstArray);
console.log(firstArray.length);
console.log(firstArray[firstArray.length- 1]);

const newLengthPush = firstArray.push("something");
console.log(firstArray);
console.log(newLengthPush);

const lastItem = firstArray.pop();
console.log(firstArray);
console.log(lastItem);

const newLengthUnshift = firstArray.unshift(42);
console.log(firstArray)
console.log(newLengthUnshift);

const firstElementShift = firstArray.shift();
console.log(firstArray);
console.log(firstElementShift);

firstArray.splice(1, 1, 56);
console.log(firstArray);

firstArray.splice(1, 0, 99);
console.log(firstArray);

const secondArray = ["A", "B", "C", "D", "E", "F"].slice(2, 5);
console.log(secondArray);

secondArray.reverse();
console.log(secondArray);

const stringJoin = secondArray.join();
console.log(stringJoin);

const thirdArray = ["A", "B"].concat(["E", "F"]);
console.log(thirdArray);

const fourthArray = [...["E", "F"], ...firstArray];
console.log(fourthArray);

const fifthArray = [firstArray, secondArray];
console.log(fifthArray[0][3]);
console.log(fifthArray[1][2]);
