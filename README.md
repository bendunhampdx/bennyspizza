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

Test:when user selects medium size pizza the price changes to 20
Code:
 } else if (pizzaSize === "medium") {
    this.price += 20
  }
Expected Outcome:20

Test:when user selects large size pizza the price changes to 25
Code:
 } else if (pizzaSize === "large") {
    this.price += 25
  }
Expected Outcome:25

