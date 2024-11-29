const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  displayProduct(product, quantity);
  saveToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");

  li.innerText = `${product}: ${quantity}`;

  ul.appendChild(li);
};

function getShoppingCart(){
    let cart = {};
    const shoppingCart = localStorage.getItem('cart');
    if(shoppingCart){
        cart = JSON.parse(shoppingCart)
        // cart = JSON.parse(shoppingCart);
    }
    return cart;
}

const saveToLocalStorage = (product, quantity) =>{
  const cart = getShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart",cartStringified);
}

const displayProductFromLocalStorage = () =>{
  const savedCart = getShoppingCart();
  for(const product in savedCart){
    const quantity = savedCart[product];
    displayProduct(product, quantity)
  }
}
displayProductFromLocalStorage();