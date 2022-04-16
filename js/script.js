Clear.addEventListener('click', function (e) {
    clear();
});

red.addEventListener('click', function (e) {
    color = "red"
});

green.addEventListener('click', function (e) {
    color = "green"
});

rainbow.addEventListener('click', function (e) {
    color = "green"
});

color = "blue"


for (let i = 1; i < (64 * 64); i++) {
    createCell();
  }



function createCell() {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.setAttribute("id", "cell");
    document.getElementById("sketchspace").appendChild(div);

}




document.querySelectorAll('#cell')
.forEach(e => e.addEventListener("mouseenter", function(e) {
    // Here, `this` refers to the element the event was hooked on
    console.log("clicked")

    e.target.style.backgroundColor = color;


}));



function clear() {
	var elements = document.getElementsByClassName('cell'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
}