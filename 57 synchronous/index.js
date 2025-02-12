//  synchronous  = Executes line by line consecutively in a sequential manner 
//                 code that  waits for an operation to complete.

//  asychronous  =  Allows multiple operations to be performed concurrently without waiting 
//                  Doesn't block the execution flow and allow  the program to continue
//                  (1/0 operations, network requests, fetching data)
//                  Handled with: Callbacks, Promise, Async/Await


function func1(Callback){
    setTimeout(() => {console.log("Task 1");
                      Callback()}, 3000);
}

function func2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");

}

func1(func2);