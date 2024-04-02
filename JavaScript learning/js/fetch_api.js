// Promises

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve('Resolved the promise!');
    } else {
        reject('Rejected the promise!');
    }
});
console.log(myPromise);

// Thenables

myPromise.then(value => {
    console.log(value);
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
})

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('myNextPromise resolved!');
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});

const users = fetch('https://jsonplaceholder.typicode.com/users');

console.log(users);

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    });
})

//Async / Await

const myUsers = {
    userList: []
};

async function mySecondFunction() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    return jsonUserData;
};
mySecondFunction();

const myThirdFunction = async () => {
    const data = await mySecondFunction();
    console.log(data);
};
myThirdFunction(); 

const getDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const jsonJokeData = await response.json();

    console.log(jsonJokeData);
};
getDadJoke();

const getSecondDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    })
    const jsonJokeData = await response.text();

    console.log(jsonJokeData);
};
getSecondDadJoke();


const jokeObject = {
    "id": "HY08E6U0Dtc",
    "joke": "What's the difference between roast beef and pea soup. Anyone can roast beef, but nobody can pee soup."
};
const postData = async (jokeObject) => {
    const response = await fetch('https://httpbin.org/post', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(jokeObject)
    })
    const jsonResponse = await response.json();

    console.log(jsonResponse);
};
postData(jokeObject);


const getDataFromForm = () => {
    const requestObject = {
        name: 'John',
        categorites: ['nerdy']
    }
    return requestObject;
};

const buildRequestUrl = (requestData) => {
    return `https://api.chucknorris.io/jokes/random?name=${requestData.name}&limitTo=${requestData.categorites}`;
}


const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const anotherJokeObject =  jsonResponse.value;
    postJokeToPage(anotherJokeObject);
};

const postJokeToPage = (joke) => {
    console.log(joke);
};

const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log('Finished!');
};

processJokeRequest();
