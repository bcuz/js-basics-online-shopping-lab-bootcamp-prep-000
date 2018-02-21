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
    var string = `In your cart, you have `
    for (var i = 0; i < cart.length; i++) {
     if (cart.length === 1) {
      //
      var key = Object.keys(cart[i])[0]
      string += `${key} at $${cart[i][key]}.`
      // console.log(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)
    } else if (cart.length === 2) {
      // console.log(`In your cart, you have ${key} at $${cart[i][key]}.`)
      // console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
    } else {
      // it would add to the string each time!
    }
  }
  console.log(string)

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
