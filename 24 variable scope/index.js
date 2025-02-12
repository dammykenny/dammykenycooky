// variable scope = where a variable recognized
//                  and acessible (local vs global)

//LOCAL SCOPE
/*
function2()

function function1(){
    let x = 1;
    console.log(x)
}  
function function2(){
    let x = 2;
    console.log(x)
}   
*/

//GLOBAL SCOPE
let x = 3;

function2()

function function1(){
    console.log(x)
}  
function function2(){
    console.log(x)
}  