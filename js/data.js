let data = localStorage.getItem("data");
const SPAN = document.getElementById("data");
let htmlContentToAppend = "";

SPAN.innerHTML = data;