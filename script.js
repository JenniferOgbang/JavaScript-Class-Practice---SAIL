// PROMPT AND ALERT
// alert("Hello Everyone");

// let a = (prompt("Enter a number:"))
// let b = (prompt("Enter a number:"))

// let a = parseInt(prompt("Enter a number:"))
// let b = parseInt(prompt("Enter a number:"))

// alert (a+b)
// PROMPT AND ALERT



// CONDITIONALS
// if statement
// if (5 > 7) {
//     console.log("5 is greater than 7")
// }

// if (5 > 7) {
//     console.log("5 is greater than 7")
// } else {
//     console.log("7 is greater than 5")
// }

// let num = 5;
// if (num > 5) {
//     console.log("round to 1")
// } else if (num < 5){
//     console.log("round to 0")
// } else if (num == 5){
//     console.log("round to 5")
// }

// let systemName = prompt("who are you?").toLowerCase();
// if(systemName === "jennifer" || systemName === "mariam") {
//     alert("Welcome to the system")
// } else {
//     alert("You are not allowed to enter the system");
// }

// let useraccess = prompt ("what are you wearing?");
// if (useraccess === "hat") {
//     alert("Welcome to the system");
// } else if (useraccess === "glasses") {
//     alert("you can enter with your glasses");
// } else if (useraccess === "mask") {
//     alert("you can enter with your mask");
// } else {
//     alert("you are not allowed to enter the system");
// }


// TEMPLATE LITERALS
// let name = "Alice";
// let age = 25;
// console.log(`My name is ${name} and I am ${age} years old.`);





// Class Practice 

//WRITE A PROMPT THAT TELLS A USER IF THEY ARE ELIGIBLE TO VOTE.
// const userage = parseInt(prompt("Enter your age:"));
// if (userage >= 18) {
//     alert(`Your age is ${userage}. You are eligible to vote.`);
// } else if (userage < 18) {
//     alert(`Your age is ${userage}. You are not eligible to vote.`);
// } else if (userage < 1) {
//     alert("Age cannot be less than 1 or a negative value.");
// } else if (isNaN(userage)) {
//     alert("You can only enter a number.");
// } else {
//     alert("You are not eligible to vote.");
// }

//CREATE A SYSTEM THAT TELLS A USER WHICH IS THE GREATER OF TWO NUMBERS.
// const num1 = parseInt(prompt("Enter the first number:"));
// const num2 = parseInt(prompt("Enter the second number:"));

// if (num1 > num2) {
//     // alert(`The greater number is ${num1}.`);
//     alert(`${num1} is the greater number ${num2}.`);
// } else if (num2 > num1) {
//     // alert(`The greater number is ${num2}.`);
//     alert(`${num2} is the greater number ${num1}.`);
// } else if (num1 === num2) {
//     // alert("Both numbers are equal.");
//     alert(`${num1} is equal to ${num2}.`);
// }

// WRITE A PROGRAM THAT DETERMINES WHETHER A GIVEN NUMBER IS POSITIVE OR NEGATIVE.
// const number = parseInt(prompt("Enter a number:"));

// if (number > 10) {
//     alert(`The number ${number} is positive.`);
// } else if (number < 10) {
//     alert(`The number ${number} is negative.`);
// } else if (isNaN(number)) {
//     alert("You can only enter a number.");
// } else {
//     alert(`The number ${number} is 10.`);
// }

// WRITE A PROGRAM TO DETERMINE THE GREATER OF THREE NUMBERS.
// const num1 = parseInt(prompt("Enter the first number:"));
// const num2 = parseInt(prompt("Enter the second number:"));
// const num3 = parseInt(prompt("Enter the third number:"));

// if (num1 >= num2 && num1 >= num3) {
//     alert(`${num1} is the greatest number.`);
// } else if (num2 >= num1 && num2 >= num3) {
//      alert(`${num2} is the greatest number.`);
// } else if (num3 >= num1 && num3 >= num2) {
//      alert(`${num3} is the greatest number.`);
// } else {
//      alert("All numbers are equal.");
// }





// ASSIGNMENT
// Question 1 - Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
//     Explanation of the assignment - for personal understanding.
//        Important things to note:
//        1. Ticket Price
//        2. Based on AGE (below 12, below 18, below 60, over 60)

let age = parseInt(prompt("Enter a number:"));

if (age <12) {
    alert (" your ticket price is 5");
} else if (age <18) {
    alert (" your ticket price is 10");
} else if (age <60) {
    alert (" your ticket price is 20");
} else if (age > 60) {
    alert (" your ticket price is 15");
} else {
    alert ("ticket is not available for this age")
}


// Question 2 - Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
//     Explanation of the assignment - for personal understanding.
//        Important things to note:
//        1. Calculate a DISCOUNT
//        2. Based on PURCHASE AMOUNT (>=100 = 20, >= 50, <50 = 0,)

// let purchaseamount = parseInt(prompt("Enter Purchse Amount:"));

// if (purchaseamount >= 100) {
//     alert ("your discount is 20");
// } else if (purchaseamount >= 50) {
//     alert ("your discount is 10");
// } else {
//     alert ("your discount is 0");
// }


// Question 3 - Write a simple function that accepts the name of different users.
// let name = prompt ("Enter your name");
//     alert(`Hello ${name}. you're welcome. Enjoy your stay.`);


// Question 4 - Write a simple function that give the addition of two numbers
// let number1 = parseInt(prompt("Enter the first number:"));
// let number2 = parseInt(prompt("Enter the second number:"));
//     alert(`${number1 + number2}`);
