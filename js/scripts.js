function Order(size, veggies, meat, price) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.price = 0;
}

let testPizza = new Order("small")

Order.prototype.orderSize = function() {
  let pizzaSize = this.size
  if(pizzaSize === "small") {
    this.price += 15
  }
  return this.price
}

