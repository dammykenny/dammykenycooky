// function declaration = define a reusable block of code 
//                        that performs a specific task
 
/*
function hello(){
    console.log("Hello");
} 
*/


// function expression = a way to define functions as 
//                       values or variation

/*
const hello = function(){
    console.log("Hello");
}
hello();
*/

/*
setTimeout(function hello(){
        console.log("Hello");
    } , 3000)
     */

 const numbers =   [1, 2, 3, 4, 5, 6];
 const squares = numbers.map(
    function (element){
       return Math.pow(element, 2);
    });

 console.log(squares)

 const cubes = numbers.map(
    function cube(element){
       return Math.pow(element, 3);
    });

const  evenNums = numbers.filter(function(element){
    return element % 2 === 0
});

const   oddNums = numbers.filter(function(element){
    return element % 2 !== 0
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);
console.log(evenNums);
console.log(oddNums);
console.log(cubes);