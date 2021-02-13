// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => localStorage.setItem("array", JSON.stringify(data)));
});
