// Remember what goes here?
var store4 = require('./store4-data.js');


// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// What is the cost of 'Dark Chocolate Crunchies' from store4?
console.log("//// Cost of Dark Chocolate Crunchies ////");

var costDarkChocCrunch = store4['Dark Chocolate Crunchies']['cost'];

console.log("The Dark Chocolate Crunchies Cost is: "  + costDarkChocCrunch);



// Set the total number of 'Berry Bites' sold by store4 to a variable.

console.log("//// Total Number of Berry Bites ////");

var totalBerryBites = store4['Berry Bites']['sold on'].length;

console.log("Total Number of Berry Bites sold: "  + totalBerryBites);


// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candies that cost more than $2.00
console.log("//// Candies that cost more than $2.00 ////");

var costArray = new Array();
var x = 0;
var i = 0;
var candyNames = Object.keys(store4);

for (x in store4) {

  if(store4[x]['cost'] > 2.00) {

    var string = candyNames[i];
    costArray.push(string);
  }
  i++;
}

console.log("Candies that cost more than $2.00: "  + costArray);

// Create a loop to return an object that has the candy name as the key and the cost as the value
console.log("//// Candy Name Object ////");

// var x = 0;
//
// var CandyData = 0;
// var candyNames = Object.keys(store4);
// console.log(candyNames);
//
var candyByName = {};

for (var candyName in store4) {
  if (store4[candyName]['cost'] > 2.00) {
    console.log(candyName);
    console.log(store4[candyName]['cost']);

    var name = candyName;
    candyByName[candyName] = store4[candyName]['cost'];

  }
}
console.log(candyByName);

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)


// Determine how much money did store3 make on January 9th.


// Calculate how much store4 made from selling Dark Chocolate Crunchies across all the days.
