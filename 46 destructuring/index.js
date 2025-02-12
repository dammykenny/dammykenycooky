// destructuring = extract values from arrays and objects,
//                 then assign them to variables in aconvenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring 
//                 5  examples


// ......... Example 1 ........
// SWAP THE VALUE OF TWO VARIABLES 

/*
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
*/


// ......... Example 2 ........
// SWAP 2 ELEMENT IN AN ARRAY

/*
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
*/


// ......... Example 3 ........
// ASSION ARRAY ELEMENTS TO VARIABLES

/*
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/


// ......... Example 4 ........
// EXTRACT VALUES FROM OBJECTS

/*
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}


const {firstName, lastName, age, job="umemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/


// ......... Example 5 ........
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person1)










