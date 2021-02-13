// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => localStorage.setItem("array", JSON.stringify(data)));

  var arr = JSON.parse(localStorage.getItem("array"));
  console.log(arr);
});