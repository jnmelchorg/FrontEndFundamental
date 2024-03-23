
const firstObject = {
    name: "John",
    hobbies: ["eat", "sleep"],
    hello: function () {
        console.log("Hello");
    }
};
console.log(firstObject);

const sendJSON = JSON.stringify(firstObject);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(receiveJSON.hobbies);
