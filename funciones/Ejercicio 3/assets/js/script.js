

const element = document.getElementById('ele1');
element.style.backgroundColor = 'green'

function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

document.addEventListener("DOMContentLoaded", function() {
    const ele = document.getElementById("ele1");

    ele.addEventListener("click", function() {
        pintar(ele, "yellow");
    });

});

