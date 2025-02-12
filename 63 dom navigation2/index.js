// ........... EXAMPLE ! <h1> ...........

// STEP 1 CREATE THE ELEMENT
//const newH1 = document.createElement("h1");

const newListItem = document.createElement("li")

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

/*
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center"
*/

// STEP 3 APPEND ELEMENT TO DOM

//document.body.append(newListItem);

 
//document.body.append(newListItem);
//document.body.prepend (newListItem);
document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);

//const banana = document.getElementById("banana" );
//document.getElementById("fruits").insertBefore(newListItem, banana)

//const listItem = document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(newListItem, listItem[1]);

// REMOVE HTML ELEMENT 

//document.getElementById("box1").removeChild(newH1);
document.getElementById("fruits").removeChild(newListItem);
