document.getElementById("button").addEventListener("click", onClick)

function onClick() {
let destination = document.getElementById("a").value
let distance = +document.getElementById("b").value;
let fuel = +document.getElementById("c").value;
let accommodationCost = +document.getElementById("d").value;
let miscellaneousExpenses = +document.getElementById("e").value;
let cost = (distance * fuel) + accommodationCost + miscellaneousExpenses;
document.getElementById("x").innerHTML = destination;
document.getElementById("y").innerHTML = Math.round(cost);
}