// JavaScript files are compiled and minified during the build process to the
// assets folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

console.log("Athena Ghost theme");

(function () {
	const toggle = document.getElementById("menu_toggle");
	const header = toggle.closest(".header");

	toggle.addEventListener("click", function () {
		header.classList.toggle("is-open");
	})
})();
