const myNumber = 42;

console.log(myNumber);

const myFloat = 42.02;

console.log(myFloat);

console.log(myNumber === myFloat);

const myString = "40";

console.log(myString + 3);

console.log(Number(myString) + 3);

console.log(Number.isInteger(myNumber));

const mySecondString = "41.036abd";

console.log(Number.parseFloat(mySecondString).toFixed(2));

console.log(Number.parseInt(myFloat));

console.log(typeof myFloat.toString());

console.log(Number.parseFloat(mySecondString).toFixed(2).toString())

console.log(Number.isNaN(Number.parseFloat("No float")))