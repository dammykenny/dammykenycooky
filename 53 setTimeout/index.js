// setTimeoutI() = function in javascript that allow you to shedule 
//                 the execution of a function after an amount of time(milliseconds)
//                 Times are approximate (varies based on the workload of the javaScript runtime env.)

//                 setTimeout(callback, delay);
//                 clearTimeout(timeoutId) = can cancel a timeout before it triggers


/*function sayHello(){
    window.alert("Hello")
}

setTimeout(sayHello, 3000);
*/

//setTimeout(function(){window.alert("Hello")}, 3000);

//setTimeout((timeoutId) => window.alert("Hello"), 3000)

let timeoutId;

function startTimer(){
    timeoutId =  setTimeout(() => window.alert("HELLO"), 3000 )
    console.log("STARTED");
}


function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED")
}
