// array = a variable like structure that can hold
//         more than 1 value


//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/

//let numOffruits = fruits.length;
//let index = fruits.indexOf("apple")

//console.log(numOffruits)
//console.log(index);


let fruits = ["apple", "orange", "banana", "coconut" ];

/*
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/ 
/*
for(let i = fruits.length -1; i >=0; i--){
    console.log(fruits[i]);
}
    */

fruits.sort().reverse();

for(let fruit of fruits ){
    console.log(fruit);
}
