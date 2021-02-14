// product-item.js

class ProductItem extends HTMLElement {

  constructor(id, image, title, price, present) {

    super();
    this.root = this.attachShadow( { mode: "open" });
    this.root.innerHTML = 
      `<style>
        .price {
          color: green;
          font-size: 1.8em;
          font-weight: bold;
          margin: 0;
        }
        
        .product {
          align-items: center;
          background-color: white;
          border-radius: 5px;
          display: grid;
          grid-template-areas: 
          "image"
          "title"
          "price"
          "add";
          grid-template-rows: 67% 11% 11% 11%;
          height: 450px;
          filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
          margin: 0 30px 30px 0;
          padding: 10px 20px;
          width: 200px;
        }
        
        .product > button {
          background-color: rgb(255, 208, 0);
          border: none;
          border-radius: 5px;
          color: black;
          justify-self: center;
          max-height: 35px;
          padding: 8px 20px;
          transition: 0.1s ease all;
        }
        
        .product > button:hover {
          background-color: rgb(255, 166, 0);
          cursor: pointer;
          transition: 0.1s ease all;
        }
        
        .product > img {
          align-self: center;
          justify-self: center;
          width: 100%;
        }
        
        .title {
          font-size: 1.1em;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .title:hover {
          font-size: 1.1em;
          margin: 0;
          white-space: wrap;
          overflow: auto;
          text-overflow: unset;
        }
      </style>`
    ;

    const li = document.createElement("li");
    li.setAttribute("class", "product");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", title);
    img.width = 200;

    const title = document.createElement("p");
    title.setAttribute("class", "title");
    title.textContent = title;

    const price = document.createElement("p");
    price.setAttribute("class", "price");
    price.textContent = "$" + price;

    const button = document.createElement("button");
    if (present) {
      button.textContent = "Remove from Cart";
    } else {
      button.textContent = "Add to Cart";
    }

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(button);

    button.addEventListener("click", () => {
      let size = document.getElementById("cart-count");
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart == null) {
        cart = [];
      }
      if (button.textContent == "Add to Cart") {
        size.textContent = parseInt(size.textContent) + 1;
        cart.push(id);
        alert("Added to Cart!");
        button.textContent = "Remove from Cart";
      } else {
        size.textContent = parseInt(size.textContent) - 1;
        cart.splice(cart.indexOf(id),1);
        alert("Added to Cart!");
        button.textContent = "Add to Cart";
      }
      localStorage.setItem('size', JSON.stringify(size.textContent));
      localStorage.setItem('cart', JSON.stringify(cart));
    })
    this.root.append(li);
    
  }
}

customElements.define("product-item", ProductItem);
