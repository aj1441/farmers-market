const burger = document.querySelector(".hamburger-menu i");
const nav = document.querySelector(".nav");

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
}

const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	//above is boiler plate code
	userArray.push(dataObject);
	console.log(userArray);
	console.log(dataObject);
	form.reset();
}
