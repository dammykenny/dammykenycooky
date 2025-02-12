// eventListener = listen for specific events to create interaction web pages 
//                 events click, mouseover, mouseout
//                 .addEventlistener(event, callback, or anonimous function or arrow function);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/*
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤔";
});


myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😯";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent =  "Click Me 😯";
})
    */

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤔";
});


myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😯";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent =  "Click Me 😯";
})
