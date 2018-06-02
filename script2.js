var form = document.getElementById("addForm");
var itemList =document.getElementById("lista");

//Set up form and event listeners for adding, removing and toggle class
form.addEventListener("submit",addItem);
itemList.addEventListener("click", removeItem);
itemList.addEventListener("click", markAsDone);


//Function for setting input field to zero after adding item
function setItemToZero(){
	document.getElementById("item").value="";

}


//Function for adding new item+done button+delete button
function addItem(e){
	e.preventDefault();
	var newItem = document.getElementById("item").value;
	if (newItem !== "") {
		var li= document.createElement("li");
		li.className = "addedItem";
		li.appendChild(document.createTextNode(newItem));

		var checkBox= document.createElement("button")
		checkBox.className= "btn btn-outline-success btn-sm right finished";
		checkBox.appendChild(document.createTextNode("Done"));
		li.appendChild(checkBox);
		itemList.appendChild(li);
		
		var deleteBtn= document.createElement("button")
		deleteBtn.className= "btn btn-danger btn-sm right delete";
		deleteBtn.appendChild(document.createTextNode("x"));
		li.appendChild(deleteBtn);
		itemList.appendChild(li);
		
		setItemToZero()
	}

}

//function for toggling the class to .done

function markAsDone(e){
	if (e.target.classList.contains("finished")) {
		var li = e.target.parentElement;
		li.className="done";
	}
}


//Function for removing item from list
function removeItem(e){
	if(e.target.classList.contains("delete")){
		var li = e.target.parentElement;
		itemList.removeChild(li);

	}

}