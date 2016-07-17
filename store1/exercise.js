var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?
console.log("/// 4.63 from store1///")
console.log(store1['2015-01-08'][0][1]);


// How would you access how many 'Mint Wafers' were sold on January 7th?
console.log("/// Mint Wafers from January 7th///")
console.log(store1['2015-01-08'][2][0]);



// Produce an array of the date keys in store1's data.
console.log("/// array of date keys ///");
console.log(Object.keys(store1));



// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
console.log("//// which candies on Jan 8 ////");

function candiesSold(date) {
  var candyArray = new Array()
  for (var i = 0; i < store1[date].length; i++) {
    candyArray[i] = store1[date][i][0];
  }
  return candyArray;
}

console.log(candiesSold('2015-01-08'));


// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
console.log("//// sold on Jan10 ////");
function numCandies(date) {
  var total = 0;

  for (var i=0; i < store1[date].length; i++) {
    total += store1[date][i][2];
  }
  //you have to initialize counter outside of the for loop because if done in the for loop, the value as 'var total = ...' would reinitialize to 0 each time.
  return total;
}

console.log(numCandies('2015-01-10'));



// Use `Object.keys()` to get an array of the dates that candies were sold at store1.

function getStoreDates(storeName) {
  var arrayStore = new Array();

  arrayStore = Object.keys(storeName);

  return arrayStore;
}

console.log("/// Using Object.keys() ///");
console.log(getStoreDates(store1));


// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
console.log("//// use each date to get sales data ////")
function printSalesData(storeName) {
  //create an array to store object info
  var salesArray = new Array();

  var dates = Object.keys(storeName);

  for (var i=0; i < dates.length; i++){
    //store1[dates[i]];
    console.log(store1[dates[i]]);
  }
}

printSalesData(store1);

// Use a loop to calculate the total number of candies sold at store1.

console.log("//// sum up the number of candies sold ////")
function printTotalCandySold(storeName) {
  //create an array to store object info
  var totalCandies = 0;
  var dates = Object.keys(storeName);

  for (i=0; i < dates.length; i++){
    for (var j=0; j< store1[dates[i]].length; j++) {

      totalCandies += store1[dates[i]][j][2];

    }
  }
    return totalCandies;
}

console.log(printTotalCandySold(store1));

// In the previous exercise, where did you have to initialize the counter variable? Why?
//
// You have to initialize before the for loops or you accidently reset the summed value to 0 each time you are in the loop.
// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.

console.log("//// which candies on Jan 10 ////");

function candiesSold(date) {
  var candyArray = new Array()
  for (var i = 0; i < store1[date].length; i++) {
    candyArray[i] = store1[date][i][0];
  }
  return candyArray;
}

console.log(candiesSold('2015-01-10'));
