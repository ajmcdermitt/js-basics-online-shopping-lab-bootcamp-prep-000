var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100+1);
  var newItem = {
    [item]: price
  }
  cart.push(newItem);
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  var message = "In your cart, you have ";
  var cartLength = cart.length - 1;

  if (cart.length == 0){
    message = "Your shopping cart is empty.";
  } else{
    for (var i = 0; i <= cartLength; i++){
      var obj = cart[i];
      var itemName = Object.keys(obj);
      var price = obj[itemName];
      //var price = obj.hasOwnProperty(itemName);
      if (i == 0){
        message += itemName + " at $" + price;
      }else if (i == cartLength){
        if (i==2){
          message += " and " + itemName + " at $" + price;
        }else{
          message += ", and " + itemName + " at $" + price;
        }
      }else
      {
        message += ", " + itemName + " at " + price;
      }
    }
    message += ".";
  }
  console.log(message);
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
