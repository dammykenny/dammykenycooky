// while loop = repeat some code WHILE some codition is true



/*
while(username === "" || username === null){
    username = window.prompt("Enter your name");
 } 
*/

/*
let username;

do {
    username = window.prompt("Enter your name");
 }while(username === "" || username === null)


 
 console.log(`Hello ${username}`)
 */

 /*
let loggedin = false;
let username;
let password;

while(!loggedin){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`); // Corrected this line

    if(username === "myUsername" && password === "myPassword"){
        loggedin = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again.");
    } 
}
    */

let loggedin = false;
let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`); // Corrected this line

    if(username === "myUsername" && password === "myPassword"){
        loggedin = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again.");
    } 
}while(!loggedin)


 

