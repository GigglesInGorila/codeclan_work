// Part 1

var myNumbers = [2, 19, 30, 54, 4, 21]

    // 1.a. Create a function that takes in numbers and returns the total of those numbers
function totalNumbers(numbers){
    var total = 0
    for(number of numbers){
        total = total + number
    }
    return total
}

// console.log(totalNumbers(myNumbers));


    // 1.b. Create a function that takes in numbers and returns just the first 3 numbers
function firstThree(numbers){
    var newArray = []
    for(var number of numbers.slice(0,3)){
        newArray.push(number) 
    }
    return newArray
  }
  // console.log(firstThree(myNumbers));


    // 1.c. Create a function that takes in numbers and returns and array only the even numbers
    function getEvens(numbers){
      var evens = []
      for(var number of numbers){
          if(number % 2 === 0){
              evens.push(number)            
          }
      }
      return evens
  }
  // console.log(getEvens(myNumbers));


    // 1.d. Create a function that takes in numbers and returns the largest number
function biggestNumber(numbers){
  var largestNumber = 0
  for(var number of numbers){
    if(number > largestNumber){
      largestNumber = number
    }
  }
  return largestNumber
}
// console.log(biggestNumber(myNumbers));


    // 1.e. Create a function that takes in numbers and a searchNumber and returns true if that number appears in the array, if not, it returns false
    function numberSearch(numbers, searchNumber){
      for(var number of numbers){
          if(number === searchNumber){
             return true
          }
      }
      return false
  }
// console.log(numberSearch(myNumbers, 3));

// Part 2

var avengers1 = [
    {name: "Tony Stark", alias: "Iron Man", strength: 80, intelligence: 95},
    {name: "Bruce Banner", alias: "Hulk", strength: 100, intelligence: 60},
    {name: "Steve Rodgers", alias: "Captain America", strength: 90, intelligence: 80},
    {name: "Peter Parker", alias: "Spider-Man", strength: 75, intelligence: 85},
    {name: "Natasha Romanov", alias: "Black Widow", strength: 50, intelligence: 90},
]

    // 2.a. Create a function that takes in an array of avengers as an argument and returns an array of avengers aliases
function avengersNames(avengers1){
  var names = []
  for(var name of avengers1){
    names.push(name.alias)
  }
  return names
}
// console.log(avengersNames(avengers1));


    // 2.b. Create a function that takes in an array of avengers as an argument and returns an array of only avengers that have at least 80 strength
function avengersStrength(avengers){
    var newArray = []
    for(var name of avengers){
      if(name.strength >= 80){
        newArray.push(name)
      }
    }
    return newArray
}
// console.log(avengersStrength(avengers1));

    // 2.c. Create a function that takes in an array of avengers as an argument and returns an array of avengers that has at least 70 strength AND 80 intelligence
    function avengersStrength(avengers){
      var newArray = []
      for(var name of avengers){
        if(name.strength >= 70 && name.intelligence >= 80){
          newArray.push(name)
        }
      }
      return newArray
  }

  // console.log(avengersStrength(avengers1));
    // 2.d. Create a function that takes in an array of avengers and an alias, and returns the avengers object that matches that alias
function avengersAliasesObject(avengers, searchAvengers){
  for(var name of avengers){
      if(name.alias === searchAvengers){
        return name
      }
  }
  return "not found"

}

// console.log(avengersAliasesObject(avengers1, "Hulk"));
// console.log(avengersAliasesObject(avengers1, "Iron Man"));

// Part 3

var myBill = [
    {
      meal: 'Green Curry',
      price: 10,
      customer: 'Sally'
    }, {
      meal: 'Sea Bass',
      price: 12,
      customer: 'Upul'
    }, {
      meal: 'Fish and Chips',
      price: 10,
      customer: 'Rita'
    }, {
      meal: 'Stick Toffee Pudding',
      price: 4,
      customer: 'Upul'
    }, {
      meal: 'Apple Pie',
      price: 5,
      customer: 'Sally'
    }
  ]
  
  // 3.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.

  function totalBill(bills){
    var total = 0
    for(var totalBill of bills){
      total = totalBill.price + total
    }
    return total
  }

  // console.log(totalBill(myBill));

  
  // 3.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.

function mealsPerPerson(meals, searchMeal){
  var items = []
  for(var meal of meals){
    if(meal.customer === searchMeal){
      items.push(meal)
    }
  }
  return items
}

// console.log(mealsPerPerson(myBill, "Sally"));
// console.log(mealsPerPerson(myBill, "bob"));

  // Re-using functions 
  
  // 3.c. Using the functions you wrote in part 3.a and 3.b, find the total that Sally spent.

var sallysMeals = mealsPerPerson(myBill, "Sally")

var sallysTotalBill = totalBill(sallysMeals)



  // 3.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items. (Re-use 3.a to get the total bill)

function averageItemPrice(bill){
  var total = totalBill(bill)
  var amountOfItems = bill.length
  return total / amountOfItems
}

console.log(averageItemPrice(myBill));