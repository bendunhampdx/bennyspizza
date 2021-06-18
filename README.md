Describe: Order()

Test:When user selects small size pizza the price changes to 15
Code:
 let pizzaSize = this.size
  if(pizzaSize === "small") {
    this.price += 15
  }
  return this.price
}
Expected Output:15