window.alert(window.location);
alert(location);

const myObject = {
    name: "name",
    property: ["a", "b"],
    logName: function() {
        console.log(this.name);
    }
};
const myArray = ["s1", "s2", "s3"];

myObject.logName();

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
console.log(typeof mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const mySecondSessionData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(mySecondSessionData);
console.log(typeof mySecondSessionData);

const key = localStorage.key(0);
console.log(localStorage.length);

localStorage.removeItem("myLocalStore")

console.log(key);
