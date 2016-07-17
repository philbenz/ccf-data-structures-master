var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.
console.log("////dates to variable////");

var dateArray = new Array ();
dateArray.push( store2['sale dates']['Banana Bunches']);

console.log("date variable is " + dateArray);

// What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
console.log("/// built in array ///");
console.log("Number of sale dates is: " + store2['sale dates']['Banana Bunches'].length);

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?

console.log("///set Mint Wafers to new Variable////");
var priceMW = store2['inventory prices']['Mint Wafers'];

console.log(priceMW);

priceMW = 9.01;

console.log(priceMW);
console.log(store2['inventory prices']['Mint Wafers']);
console.log("Only the receiving variable was changed - store2 data was never touched.");

// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.
console.log("///Peanut Butter sale dates////");
var saleDatePB = store2['sale dates']['Peanut Butter Buttered Peanuts'];
console.log("PB Sales Date: " + saleDatePB);

var new_PB_BP_Array = store2['sale dates']['Caramel Twists'].slice(0);

new_PB_BP_Array.pop();

console.log("Old array: "  + store2['sale dates']['Caramel Twists'].length);

console.log("New Array: " + new_PB_BP_Array.length);

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
console.log("//// Create New Object ////");

function createObj(arr){
  var dateSalesObject = {};


  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) dateSalesObject[arr[i]] = true;

  return dateSalesObject;
}

function createObj_CT(){
  var count = 0;  //used for tracking daily sales
  var newDate = ''; //used to track change in dates in for...loop
  var salesArray = new Array (); //this will be used to create the object

  dates = store2['sale dates']['Caramel Twists'];

  newDate = dates[0]; //set base for start of dates

  for(var i = 0; i < dates.length; i++){
      if(dates[i] !== newDate ) {
          //push previous date into new sales array
          salesArray.push(newDate + " : " + count);

          //reset new date to accomodate date change
          //man this smells......
          newDate = dates[i];

          // reset count to zero for new date
          count = 0;
      }

    //increment count;
    count += 1;
  }
  //push final date and count into array
  salesArray.push(newDate + " : " + count);

  return createObj(salesArray);
}

console.log(createObj_CT());

// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?

// console.log("//// Most Sales Date ////");
//
// function mostSalesDate(){
//   var count = 0;  //used for tracking daily sales
//   var newDate = ''; //used to track change in dates in for...loop
//   var salesArray = new Array (); //this will be used to create the object
//
//   console.log("dates is: " + dates);
//
//   newDate = dates; //set base for start of dates
//
//   for(var i = 0; i < SalesArray.length; i++){
//       if(dates[i] !== newDate ) {
//           //push previous date into new sales array
//           salesArray.push(newDate + " : " + count);
//
//           //reset new date to accomodate date change
//           //man this smells......
//           newDate = dates[i];
//
//           // reset count to zero for new date
//           count = 0;
//       }
//
//     //increment count;
//     count += 1;
//   }
//   //push final date and count into array
//   salesArray.push(newDate + " : " + count);
//
//   return salesArray;
// }
//
// console.log(mostSalesDate());
//
// /////////// CHALLENGE ///////////
//
// // Create an object containing the amounts that store2 made by selling each type of candy.
