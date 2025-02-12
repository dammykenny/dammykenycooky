// element selectors = Methods used to target and manipulate HTML elements 
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()        // Element OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName()  // HTML COLLECTION
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySElectorAll()      // NODELIST

/*
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";


console.log(myHeading);
*/

/*
const fruits = document.getElementsByClassName("fruits");

//fruits[1].style.backgroundColor = "yellow"

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});
*/

/*
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach(h4Elements => {
    h4Elements.style.backgroundColor = "yellow";
})

Array.from(liElements).forEach(liElements => {
    liElements.style.backgroundColor = "lightgreen";
})
*/
/*
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow"
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
}
    */

/*
const element = document.querySelector("ul");

element.style.backgroundColor = "yellow";
*/

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow"
})
