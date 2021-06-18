function Order(size, veggies, meat, price) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.price = 0;
}

let testPizza = new Order("large")

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

