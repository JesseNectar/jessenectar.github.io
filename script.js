var input = document.getElementById('userinput');
var addButton = document.getElementById("enter");
var ul = document.getElementsByTagName("ul")[0];
var addedItems = document.getElementsByTagName("li");
var deleteButton = document.getElementsByClassName("dltbtn")


function addItem(){

	if (input.value.length > 0){

	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add("coolTitle");
	var deletebutton = document.createElement("button");
	deletebutton.appendChild(document.createTextNode("x"));
	li.appendChild(deletebutton);
	deletebutton.classList.add("dltbtn");
	
	input.value="";

	
		}	
	}

function deleteListItem(){
	console.log("delete");
}





addButton.addEventListener("click", addItem );
//deleteButton.addEventListener("click", function(){console.log("delete")})
