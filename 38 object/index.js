// object = A collection of related properties and/or methods 
//          can represent real world objects (people, products places)
//          object =  {key:value,
//                     function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am spongebob!")},
    eat: function(){console.log("I am eating a krabby patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey,  I'm patrick..."),
    eat: () => console.log("I am eating a krabby patty"),
}


person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();

/*
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
*/