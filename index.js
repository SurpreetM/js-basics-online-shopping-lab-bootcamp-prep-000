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
 var newItem = createItem(item)
  getCart().push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (getCart().length === 0) {return `Your shopping cart is empty.`}
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
