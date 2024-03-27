'use strict'

const view1 = document.querySelector('#view1');
view1.style.display = "none";
const div_c1 = view1.querySelector('div');
div_c1.style.display = "none";
const view2 = document.querySelector('#view2');
view2.style.display = "none";
const div_c2 = view2.querySelector('div');
div_c2.style.display = "none";
const view3 = document.querySelector('#view3');
view3.style.display = "none";

const useForm = true;

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        if (!useForm) {initApp();}
        else {initSecondApp();}
    }
});

const initApp = () => {
    view2.style.display = "flex";
    div_c2.style.display = "flex";

    const view = document.querySelector('#view2');
    console.log(view);

    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    function doSomething() {
        alert("doing something");
    };
    h2.addEventListener("click", doSomething, false);
    h2.removeEventListener("click", doSomething, false);

    h2.addEventListener("click", (event) => {
        console.log(event.target);
        // event.stopPropagation();
        const myText = event.target.textContent;
        myText === "My 2nd View"
        ? event.target.textContent = "Clicked"
        : event.target.textContent = 'My 2nd View';
    }, false);

    view.addEventListener("click", (event) => {
        view.classList.toggle('purple');
        view.classList.toggle('darkblue');
    }, false);

    div.addEventListener("click", (event) => {
        div.classList.toggle('blue');
        div.classList.toggle('black');
    }, false);

    const nav = document.querySelector('nav');
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });

    nav.addEventListener('mouseout', (event) =>{
        event.target.classList.remove("height100");
    });
};

function initSecondApp() {
    view3.style.display = "flex";

    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('submit event');
    });
};
