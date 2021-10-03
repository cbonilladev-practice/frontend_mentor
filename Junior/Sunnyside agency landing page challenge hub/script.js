const hamburger = document.getElementById("hamburger");
const hamburger_menu = document.getElementById("nav_links");

function revealHamburger() {
	if (hamburger_menu.classList[1] === "hide") {
		hamburger_menu.setAttribute("class", "nav_links show")
	} else {
		hamburger_menu.setAttribute("class", "nav_links hide")
	}
}