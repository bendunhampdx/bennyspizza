// Business Logic


function Order(size, veggies, meat) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.price = 0;
}

let testPizza = new Order("large", "redOnion", "veganSausage")

Order.prototype.orderSize = function() {
  let pizzaSize = this.size
  if(pizzaSize === "small") {
    this.price += 15
  } else if (pizzaSize === "medium") {
    this.price += 20
  } else if (pizzaSize === "large") {
    this.price += 25
  }
  return this.price
}

Order.prototype.orderVeggies = function() {
  let pizzaVeg = this.veggies
  if(pizzaVeg === "redOnion") {
    this.price += 2
  } else if (pizzaVeg === "spinach") {
    this.price += 2
  } else if (pizzaVeg === "peppers") {
    this.price += 2
  } else if (pizzaVeg === "broccoli") {
    this.price += 2
  } else if (pizzaVeg === "mushroom") {
    this.price += 2
  }
  return this.price
}

Order.prototype.orderMeat = function() {
  let pizzaMeat = this.meat
  if(pizzaMeat === "veganSausage") {
    this.price += 3
  } else if (pizzaMeat === "pepperoni") {
    this.price += 3
  } else if (pizzaMeat === "chicken") {
    this.price += 3
  } else if (pizzaMeat === "sausage") {
    this.price += 3
  }
  return this.price
}


// User Interface Logic

$(document).ready(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#size").val();
    const pizzaVeg = $("#veggies").val();
    const pizzaMeat = $("#meat").val();
    let userPizza = new Order(pizzaSize, pizzaVeg, pizzaMeat)
    userPizza.orderSize()
    userPizza.orderVeggies()
    userPizza.orderMeat()
    $("#price").text(userPizza.price)
  })
})


