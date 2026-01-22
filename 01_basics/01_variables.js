const accountId ="'1234567890" 
let balance = "1000"
var isActive = true  
accountCity = "New York"

// accountId = "2"(not allowed, const cannot be reassigned)
balance = "1500" // allowed, let can be reassigned
accountCity = "Los Angeles" // allowed, global variable
let accountState;
console.log(balance, accountCity, isActive);
console.table({accountId, balance, isActive, accountCity, accountState});

// prefer not to use var, use let and const instead
// because of issue in block scope and functional scope

