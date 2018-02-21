var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var rand = Math.floor((Math.random() * 100) + 1);

 cart.push({[item]: rand})

 console.log(`${item} has been added to your cart.`)
 return cart

}

function viewCart() {
  // write your code here
  // https://github.com/bcuz/js-deli-counter-bootcamp-prep-000/blob/master/index.js

  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {

    for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i][0])
     if (cart.length === 1) {
      console.log(`In your cart, you have ${key} at $${}.`)
    } else if (cart.length === 2) {

    } else {

    }
  }

  }
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
