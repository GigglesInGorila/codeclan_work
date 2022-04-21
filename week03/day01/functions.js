function sayHello(name){
    // console.log("Hello " + name)
    var greeting = "Hello " + name
    return greeting
}


var newGreeting = sayHello("Harrison")

// console.log(newGreeting);


function timeOfDay(time, date){
    var timeAndDate = "The time is " + time + " on " + date
    return timeAndDate
}

var todaysDate = timeOfDay("10:48", "11th of April")
// console.log(todaysDate);

var todaysDate2 = timeOfDay("11:25", "12 of April")
// console.log(todaysDate2);



// Calculator 

function add(firstNumber, secondNumber){
    var result = firstNumber + secondNumber
    return result
}

var answer = add(1, 4)
var answer2 = add(4, 5)
// console.log(answer);

function subtract(firstNumber, secondNumber){
    var resultSub = firstNumber - secondNumber
    return resultSub
}

var answerSub = subtract(5, 1)
// console.log(answerSub);

function times(firstNumber, secondNumber){
    var resultTimes = firstNumber * secondNumber
    return resultTimes
}

var answerTimes = times(5, 2)
// console.log(answerTimes);

function divide(firstNumber, secondNumber){
    var resultDivide = firstNumber / secondNumber
    return resultDivide
}

var answerDivide = divide(10, 2)
// console.log(answerDivide);
var name = ("Harrison")

function lengthOfAString(length){
    var lengthOfString = length.length
    return lengthOfString
}

var lengthOf = lengthOfAString(name)
// console.log(lengthOf);

// I want the total lenth of 2 strings added together

var name = "Harrison"
var name2 = "Abbas"

function lengthOf2Strings(names, names2){
    var lengthOfNames = "your name is " + sting1 
    return lengthOfNames
}

var names = lengthOf2Strings(name, name2)
console.log(names);