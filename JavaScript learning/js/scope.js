// Global scope

var x = 1;
var x = 2;

console.log(x);

let y = 1;
y = 2;

console.log(y);

function myFunc(){
    const z = 3;
    console.log(z);
}

myFunc();

var x1 = 10;
let x2 = 20;
const x3 = 30;

console.log(`global: ${x1}`);
console.log(`global: ${x2}`);
console.log(`global: ${x3}`);

function otherFunc(){
    var x1 = 40;
    let x2 = 50;
    const x3 = 60;
    console.log(`function: ${x1}`);
    console.log(`function: ${x2}`);
    console.log(`function: ${x3}`);

    {
        var x1 = 70;
        let x2 = 80;
        const x3 = 90;
        console.log(`block: ${x1}`);
        console.log(`block: ${x2}`);
        console.log(`block: ${x3}`);
    }
}

otherFunc();
