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
    } else if (cart.length === 2) {
      var key = Object.keys(cart[i])[0]

      if (i === 0) {
        string += `${key} at $${cart[i][key]} and `
      } else {
        string += `${key} at $${cart[i][key]}.`
      }
    } else {
      var key = Object.keys(cart[i])[0]

      // it would add to the string each time!
      if (i !== cart.length - 1) {
        string += `${key} at $${cart[i][key]}, `
      } else {
        string += `and ${key} at $${cart[i][key]}.`

      }

    }
  }
  console.log(string)

  }
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0]

  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
