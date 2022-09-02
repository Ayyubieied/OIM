$(document).ready(function() {
	var navi = document.querySelector(".navi");
	var navLinks = document.querySelector(".nav-links");
	var dropdown = document.querySelector(".dropdown");

	// Rotates arrow
	navi.addEventListener("click", () => {
		navLinks.classList.toggle("open");
		dropdown.classList.toggle("rotate");
	});
});