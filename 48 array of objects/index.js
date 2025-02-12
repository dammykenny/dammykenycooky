const fruits = [{ name: "apple", color: "red", calories: 95}, 
    { name: "orange", color: "orange", calories: 45},
    { name: "banana", color: "yellow", calories: 105},
    { name: "coconut", color: "white", calories: 159}, 
    { name: "pineapple ", color: "yellow", calories: 37}];


// ........... forEach() ..........

// fruits.forEach(fruit => console.log(fruit.name));

// ........... forMap() ..........

/*
const fruitNames = fruits.map(fruits => fruits.name);
const fruitColors = fruits.map(fruits => fruits.color);
const fruitCalories = fruits.map(fruits => fruits.calories);

console.log(fruitNames); 
console.log(fruitColors);
console.log(fruitCalories); 
*/


// ........... filter() ..........

/*
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalfruits = fruits.filter(fruit => fruit.calories < 100);
const highCalfruits = fruits.filter(fruit => fruit.calories > 100);   

console.log(highCalfruits);
*/




// ........... ruduce() ..........


const maxFruits = fruits.reduce((max, fruit) => 
                                  fruit.calories > max.calories ?
                                  fruit : max);

 const minFruits = fruits.reduce((min, fruit) => 
                                    fruit.calories < min.calories ?
                                    fruit : min);

console.log(maxFruits);
console.log(minFruits);                                 