/*
const grandparent = document.getElementById("grandparent-id");

grandparent.style.backgroundColor = "black";


const parents = Array.from(document.getElementsByClassName("parents"));
// parents.style.backgroundColor = "#ccc";3

parents.forEach(changeColor)
// changeColor(parents[1]);

*/

const child = Array.from(document.querySelectorAll(".grand-parent .parents .child"));

// changeColor(child);
child.forEach(changeColor);

function changeColor(element){
    element.style.backgroundColor="blue"
}