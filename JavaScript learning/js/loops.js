let myNumber = 0;
while (myNumber < 50) {
    console.log(myNumber);
    myNumber++;
}

let mySecondNumber = 0;
do {
    mySecondNumber += 2;
    console.log(mySecondNumber);
} while(mySecondNumber < 50);

for (let i = 0; i < 10; i += 2){
    console.log(i);
}

let testName = "Jose";
for (let i = 0; i < testName.length; i++){
    let myLetter = testName.charAt(i);
    console.log(myLetter);
    if (myLetter === 'J'){
        i = 2;
        continue
    }
    console.log('This should only print once.')
    if (myLetter === 's') break;
}
