// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    const productItem = document.createElement("productItem");
    productItem.innerHTML = 
      `<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
      <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
      <p class="price">$109.95</p>
      <button onclick="alert('Added to Cart!')">Add to Cart</button>`
    ;
    super();
    this.root = this.attachShadow( { mode: "open" });
    
  }
}

customElements.define('product-item', ProductItem);

/*
<!-- li class="product">
  <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
  <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
  <p class="price">$109.95</p>
  <button onclick="alert('Added to Cart!')">Add to Cart</button>
</li -->
*/