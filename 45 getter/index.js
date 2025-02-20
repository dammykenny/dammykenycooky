// getter = special method that makes a property readable
// setter = special methos that makes a property writeable 

// validate and modify a value when reading/writing a property

/*
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number")
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("height must be a positive number")
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/


class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    set firstName(newfirstName){
        if(typeof newfirstName === "string" && newfirstName.length > 0){
            this._firstName = newfirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newlastName){
        if(typeof newlastName === "string" && newlastName.length > 0){
            this._lastName = newlastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge
        }
        else{
           console.error("Age must be a non-negative number") 
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    
    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);