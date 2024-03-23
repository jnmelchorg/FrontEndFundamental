"use strict" // This forces strick sintax of JavaScript

const firstVariable = "something";
console.log(firstVariable);

const MakeError = () => {
    try {
        firstVariable = "something else";
    } catch (err) {
        console.error(err.name);
        console.error(err.stack);
        console.error(err);
        console.table(err);
    }
};
MakeError();

const MakeSecondError = () => {
    try {
        throw new CustomError("this is a custom error");
    } catch(err) {
        console.error(err.name);
        console.error(err.stack);
        console.error(err);
        console.table(err);
    } finally {
        console.log('...finally');
    }
}
MakeSecondError();

function CustomError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
};
