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
  if (getCart().length === 0) {return `Your shopping cart is empty.`} else {
    
    var openingSentence = `In your cart, you have `
  
  if (getCart().length >= 1) {
    openingSentence += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
    
    if (getCart().length >=2) {
      for (let i=1, l=getCart().length-1; i=<l; i++) {
        openingSentence += `, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
      }
    }
    
  }
  
  return`${openingSentence}.`
  }
}

function cartDescription() {
  var openingSentence = `In your cart, you have `
  
  if (getCart().length >= 1) {
    openingSentence += `${getCart()[0].itemName} at ${getCart()[0].itemPrice}`
    
    if (getCart().length >=2) {
      for (let i=1, l=getCart().length-1; i<l; i++) {
        openingSentence += `, and ${getCart()[i].itemName} at ${getCart()[i].itemPrice}`
      }
    }
    
  }
  
  return`${openingSentence}.`
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
