// syntax
// condition ? value_if_true : value_if_false

let soup = 'chicken soup';
let response = soup ? 'soup available' : 'soup not available';
console.log(response);

let anotherResponse = !soup ? 'no positive answer' : 'maybe I\'ll eat';
console.log(anotherResponse)

// chained ternary statements
let isbannedClient = false;
let thirdResponse = isbannedClient ? "no soup for you" : soup ? 'soup available' : 'soup not available';
console.log(thirdResponse)