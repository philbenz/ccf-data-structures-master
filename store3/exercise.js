// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.

var store3 = require('./store3-data.js');



//()()()()() ACCESSING DATA ()()()()()\\

// Set a variable equal to Berry Bites data for store3 on January 7.
console.log("//// Berry Bites on Jan 7 ////");

var BerryBitesData = store3[1]['inventory sold']['Berry Bites']['quantity'];

console.log(BerryBitesData);



// Console log how many Mint Wafers were sold on January 9th?

console.log("//// How Many Mint Wafers ////");

var mintWafersSold_Jan_9 = store3[3]['inventory sold']['Mint Wafers']['quantity'];

console.log(mintWafersSold_Jan_9);


// Set a variable equal to how many dates are included in the dataset.
console.log("//// How many dates in store3 ////");

var dateTotal = store3.length;
console.log("Total Number of days: " + dateTotal);


//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.

console.log("//// Loop to get array of dates ////");

var dateTotal = store3.length;
var dateArray = new Array ();

for(i = 0; i < dateTotal; i++) {
  dateArray.push(store3[i]['date']);
}

console.log(dateArray);

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price.

console.log("//// Object.keys ////");

var inventory = store3[4]['inventory sold'];
var candyNames = Object.keys(inventory);

var candyByPrice = {};

for (var i = 0; i < candyNames.length; i++) {
  var name = candyNames[i];
  var candyData = inventory[name];
  candyByPrice[name] = candyData.cost;
}

console.log(candyByPrice);

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold on all dates.

console.log("//// Peanut Butter Buttered Peanuts ////");

var quantity = 0;
var x = 0;

for (x in store3){
  quantity += store3[x]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity'];
}

console.log("Total PB_BP quantity: "+ quantity);

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th.
