// Dom Navigation = The process of navigator through the structrure 
//                 of an HTML document using Javascript 

//  .firstElementChild
//  .lastElementChild
//  .nextElementSibling
//  .previousElementSibling
//  .parentElement 
//  .children  

// ............. .firstElementChild  ............

/*
const element = document.getElementById("deserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";
*/

/*
const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
*/


// ............. .lastElementChild  ............

/*
const element = document.getElementById("deserts");
const lastChild = element.lastElementChild;
*/

/*
const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
   lastChild.style.backgroundColor = "yellow";
});
*/

// ............. .nextElementsibling  ............

/*
const element = document.getElementById("fruits ");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";
*/

// ............. .previousElementsibling  ............

/*
const element = document.getElementById("pie");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";
*/

// ............. .parentElement  ............

/*
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
*/

// ............. .children  ............

const element = document.getElementById("deserts");
const children = element.children;
 
/*
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});
*/
children[0].style.backgroundColor = "yellow";