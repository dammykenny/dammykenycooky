// nested objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures 
//                  Child object is   enclosed by a parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

/*
const person = {
    fullName: "spongebob squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 conch st.",
        city: "Bikini Bottom",
        country: "Int. water"
    }

}

for(const property in person.address){
    console.log(person.address[property]);
}
    */

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;

    }
}

const person1 = new Person("spongebob", 30, "124 conch st.",
                                             "Bikini Bottom", 
                                             "Int. water");

                                             
const person2 = new Person("patrick", 37, "128 conch st.",
                                          "Bikini Bottom", 
                                          "Int. water");

                                            
const person3 = new Person("squidward", 45, "126 conch st.",
                                            "Bikini Bottom", 
                                            "Int. water");

console.log(person3.address.country);
