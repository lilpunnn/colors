var button = document.getElementsByClassName("box");
const container = document.querySelector(".container");

for (i = 0; i < container.childNodes.length; i++) {
	button[i].onmouseover = function () {
		document.body.style.backgroundColor = this.textContent;
	};
	button[i].onmouseout = function () {
		document.body.style.backgroundColor = "#2d2e30";
	};
}

// for (i = 0; i < container.childNodes.length; i++) {
// 	const color = button[i].textContent;
// 	button[i].addEventListener("click", function () {
// 		color.innerHTML = "hi";
// 	});
// }
