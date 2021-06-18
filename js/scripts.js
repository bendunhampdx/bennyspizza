function Order(size, veggies, meat, price) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.price = 0;
}

let testPizza = new Order("large", "redOnion")

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

