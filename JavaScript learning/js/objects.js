
const firstObject = { key: "value" };
console.log(firstObject);
console.log(firstObject.key);


const secondObject = {
    alive: true,
    answer: 42,
    hobbies: ["A", "B"],
    beverage: {
        morning: "Coffee",
        afternoon: "Tea"
    },
    action: function() {
        return `${this.beverage.afternoon}`;
    }
};
console.log(secondObject.alive);
console.log(secondObject.answer);
console.log(secondObject.hobbies[0]);
console.log(secondObject.beverage.afternoon);
console.log(secondObject["beverage"]["morning"]);
console.log(secondObject.action());
console.log(Object.keys(secondObject));
console.log(Object.values(secondObject));
for (let key in secondObject) {
    console.log(secondObject[key]);
}
delete secondObject.hobbies;
console.log(secondObject.hasOwnProperty("hobbies"));
const { beverage: Beverages } = secondObject;
console.log(Beverages);

function otherFunction({answer}) { return `Answer in function ${answer}` };
console.log(otherFunction(secondObject));


const thirdObject = Object.create(secondObject);
thirdObject.colour = true;
console.log(thirdObject);
console.log(thirdObject.answer);
thirdObject.alive = false;
console.log(thirdObject.alive);
console.log(Object.keys(thirdObject));
console.log(Object.values(thirdObject));
