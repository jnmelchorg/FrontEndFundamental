# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Other packages being used

## `npx json-server -p 3500 -w path\to\json`

This code depends on json-server to run the json database that was used to mimic the interaction with a backend database. This needs to run in a different terminal that the one that is used to run `npm start`. Port 3500 can be changed to any other port different to port 3000 that is used by the react application. More information on json-server can be found [here](https://www.npmjs.com/package/json-server).

## `npm i axios`

Axios was used in this tutorial as an alternative to Fetch API in JavaScript. More information [here](https://www.npmjs.com/package/axios)

## `npm i date-fns`

date-fns is used in the tutorial to format JavaScript dates. More information [here](https://www.npmjs.com/package/date-fns).

## `npm i easy-peasy`

easy-peasy is used in the tutorial to manage the state of different elements in the application. More information [here](https://www.npmjs.com/package/easy-peasy).

## `npm i react-icons`

react-icons is used to easily access and display popular icons in the application. More information [here](https://www.npmjs.com/package/react-icons).

## `npm i react-router-dom`

react-router-dom is used in the application to define routes that then create pages for certain elements. More information [here](https://www.npmjs.com/package/react-router-dom)

# What was covered in the development of this application?

## React router (chapter 16)

React router is used to route different components so that they represent different pages in the website. The tutorial used version 5 of react-router-dom that is different from the version that was used in this implementation. version 5 uses Switch and version 6 uses Routes. version 5 uses useHistory and version 6 uses useNavigation. The tutorial uses component inside the Router and this code uses element instead, which version 6 requires.

This part explored the use of **BrowserRouter, Routes, Route** from **react-router-dom**.

**BrowserRouter** enables React Router to manage the application's routing based on the current URL. It ensures that the correct components are rendered when the URL changes and provides a seamless navigation experience within your React application.

**Routes** is a declarative way of defining routes and their corresponding components.

**Route** is used to define the mapping between a URL path and the React component that should be rendered when that path matches the current URL.

An example of this being used in this application can be found in [index.js](./src/index.js).

## Router Hooks and Links (chapter 17)

useParams and useNavigate are the Router Hooks that are used in this application. **useParams** is used to retrieve information from the parameter defined in the path attribute of Route. For example:

```js
Route(path='/posts/:id')
```

In the case above **:id** will be picked up by useParams. This example can be found in [App.js](./src/App.js).

**useNavigate** is used to navigate to a different route in the application. An example of it being used can be found in [NewPost.js](./src/NewPost.js).

**Link** is used to create links between different routes within the application without causing a full page reload. An example of its use can be found in [Nav.js](./src/Nav.js). 

## Flexbox components (chapter 18)

This part briefly explores some changes in the CSS file use to style the different components in the application. The CSS for this application is [index.css](./src/index.css).

## Axios API Requests (chapter 19)

This part covers the basics of how to use Axios API. A brief description of Axios and useful link can be found in [npm i axios](#npm-i-axios). The URL was defined in [posts.js](./src/api/posts.js) and the api is used in [store.js](./src/store.js) to get, update and delete.

## Custom Hooks (chapter 20)

Custom hooks in React are JavaScript functions that utilize React's hooks feature to encapsulate logic that can be reused across multiple components. They are a powerful way to abstract complex logic and state management into reusable functions, making components more modular and easier to understand.

Custom hooks follow the naming convention of starting with "use" to indicate that they are hooks. They can use other hooks such as useState, useEffect, useContext, etc., and can even call other custom hooks.

In this application 2 custom hooks were created useAxiosFetch in file [useAxiosFetch.js](./src/hooks/useAxiosFetch.js) and useWindowSize in file [useWindowSize.js](./src/hooks/useWindowSize.js).

**useAxiosFetch** is used in [App.js](./src/App.js) to retrieve the data from the json database example.

**useWindowSize** is used in [Header.js](./src/Header.js) to get the width of the webpage in order to assign an icon for either phone, tablet or laptop depending on the width of the webpage.

## Context API and useContext Hook (chapter 21)

**createContext** is a function that is part of the **react** library and is used to create a context object. Context provides a way to share values like theme, locale, or authentication state across the component tree without having to pass props down manually (prop drilling) at every level.

The qualities of createContext above help to create abstractions that otherwise would be difficult to achieve with other components of react.

**useContext** is a hook provided by React that allows functional components to consume values from a context created by the **createContext** function. It provides a convenient way to access the current context value within a functional component without the need for a Consumer component. For example:

```js
const value = useContext(MyContext);
```

The code was originally refactored with **createContext** and **useContext**. However, the code was refactored again with the library easy-peasy and it removed the need for the refactored code of this chapter. The tutorial explains this at time [7:17:04](https://www.youtube.com/watch?v=RVFAyFWO4go&t=26224s).

## Easy-peasy Redux (chapter 22)

Easy Peasy is a library for managing state in React applications, inspired by Redux but with a simpler and more intuitive API. It aims to reduce the boilerplate code typically associated with Redux while maintaining its core principles of a single immutable state tree and unidirectional data flow.

Redux is a predictable state container for JavaScript applications, primarily used with React or any other view library or framework. It's often used in complex applications for managing the application's state in a consistent and predictable way.

**easy-peasy** was used to define the state of multiple elements and some of the CRUD (Create, Read, Update, Delete) functions used in this application and all of them were defined in the file [store.js](./src/store.js).

The component **StoreProvider** from easy-peasy was used in  [index.js](./src/index.js) to give access to all the components in the application to all the variables and functions defined in [store.js](./src/store.js).


## Build and deploy your react apps (chapter 23)

This chapter explores how to deploy react application in [Netlify](https://www.netlify.com/) and [Github Pages](https://pages.github.com/).