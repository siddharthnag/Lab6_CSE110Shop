// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
/*  if (localStorage.getItem("data") == null) {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => localStorage.setItem("data", JSON.stringify(data)));
  }*/
  
  if (localStorage.getItem("data") == null) {
    const res = await fetch('https://fakestoreapi.com/products');
    let products = await res.json();
    localStorage.setItem('data', JSON.stringify(data));
  } else {
    let products = JSON.parse(localStorage.getItem("data"))
  }

  let products = JSON.parse(localStorage.getItem("data"));
  let productList = document.getElementById("product-list");
  let cartCount = document.getElementById("cart-count");

  if (localStorage.getItem("cart") == null) {
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem("cart"));

  if(JSON.parse(localStorage.getItem('count')) == null) {
    localStorage.setItem('count', JSON.stringify(cartCount.textContent));
    count = JSON.parse(localStorage.getItem('count'))
  } else {
    count = JSON.parse(localStorage.getItem('count'));
  }
  cartCount.textContent = count;

  for (var product in products) {
    let item = products[product];
    let productItem = document.createElement("product-item");
    productItem = new ProductItem(item.id, item.image, item.title, item.price, cart.includes(item.id));
    productList.appendChild(ProductItem);
  }
});
