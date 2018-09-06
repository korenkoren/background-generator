var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

var btn = document.createElement("BUTTON");
var text = document.createTextNode("Click Me!");
btn.appendChild(text);
document.body.appendChild(btn);

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function changeToRandomColor() {
	var rndColor1 = getRandomColor();
	var rndColor2 = getRandomColor();

	color1.value = rndColor1;
	color2.value = rndColor2;
	setGradient();
}


btn.addEventListener("click", changeToRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);