var css = document.querySelector("h3");
var color1=document.querySelector(".firstColor");
var color2=document.querySelector(".secondColor");
var body = document.getElementById("gradient");
var randomize = document.getElementById("randomButton");

setGradientInit()

function setGradientInit () {
body.style.background=
"linear-gradient(to right,"
 + color1.value 
 +","
 + color2.value 
 + ")";

 css.textContent =body.style.background +";";
	
}


function setGradient () {
body.style.background=
"linear-gradient(to right,"
 + color1.value 
 +","
 + color2.value 
 + ")";

 css.textContent =body.style.background +";";
	
}

function setRandomGradient(){

	color1.value="#"+((1<<24)*Math.random()|0).toString(16)
	color2.value="#"+((1<<24)*Math.random()|0).toString(16)

	setGradient()


}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomize.addEventListener("click", setRandomGradient);
	




