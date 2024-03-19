alert("This is a test!");

let myBoolean = confirm('Ok === True\nCancel === False');
console.log(myBoolean);

let nameInPrompt = prompt('Enter name');
if (nameInPrompt) {
    console.log(nameInPrompt.length);
    console.log(nameInPrompt.trim().length);
    console.log(nameInPrompt.trim());
} else {
    console.log("Prompt window left blank")
}
