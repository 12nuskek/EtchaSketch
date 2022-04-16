menu1.addEventListener('click', function (e) {
    console.log("menu1")
});

menu2.addEventListener('click', function (e) {
    console.log("menu2")
});

menu3.addEventListener('click', function (e) {
    console.log("menu2")
});



function createCell() {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.setAttribute("id", "cell");
    document.getElementById("sketchspace").appendChild(div);

}

for (let i = 0; i < 12; i++) {
    createCell();
  }




window.onload = createCell;
