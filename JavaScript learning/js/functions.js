const sum = function (firstNumber, secondNumber) {
    if (secondNumber === undefined) {
        return firstNumber * 2;
    }
    return firstNumber + secondNumber;
}

console.log(sum(2));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("testEmail@whatever.com"));

const multiply = (firstNumber, secondNumber) => {
    if (secondNumber === undefined){
        return firstNumber * firstNumber;
    }
    return firstNumber * secondNumber;
}

console.log(multiply(3, 8));