var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createItem (item) {
  return {itemName: item, itemPrice: randomNumber(0,100)}
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
