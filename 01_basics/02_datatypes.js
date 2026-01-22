"use strict"; //treat all js code as modern js
//alert(3+3) //(we are using nodejs, not browser)
// code readability should be high priority
let name = "John Doe"; //string literal
let age = 30; //number literal
let isEmployed = true; //boolean literal
let salary = null; //null literal
let address; //undefined literal
let bigNumber = 9007199254740991; //bigint literal
let uniqueId = Symbol("id"); //symbol literal
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isEmployed); //boolean
console.log(typeof salary); //object (this is a known bug in JS, null is not an object) INTERVIEW QUESTION
console.log(typeof address); //undefined
console.log(typeof bigNumber); //bigint
console.log(typeof uniqueId); //symbol

