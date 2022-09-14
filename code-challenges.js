// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Use a conditional to compare the two strings length and return an output
  // Determine how long each string is by using .length
  // Relational operators to compare and provide evaluation
  // console log the result of which string was greater 

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// // Expected outcome: "cherry"

// if(fruit1.length > fruit2.length) {
//   console.log(fruit1)
// } else if(fruit1.length < fruit2.length) {
//   console.log(fruit2)
// } else {
//   console.log("Ooops, something went wrong")
// }



// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

// (Michy)
// First I broke up the question into parts: below, above, exact
// I then knew that I was going to be comparing with criteria which is why I knew to use if/else conditional staements.
// Going on from here, I began with the first set of criteria which was "what if a number is below the boiling point?"
// I then realized that the "boiling point" needed to be established as a variable since it is the anchor to what the temp is being compared to.
// I set boilingPoint to 212 since that's what the instructions said was the boiling point.
// From there, I began typing out the statement as if I were speaking to someone in a logical form: "if the temperature is less than the boiling point, then I want the outcome to say 'the temp is below the boiling point"
// I established this same logic for all scenerios such as greater than and strictly equal to.

const temp = 42
// Expected output: "42 is below boiling point"
let boilingPoint = 212

//  const temp = 350
// Expected output: "350 is above boiling point"

//  const temp = 212
// Expected output: "212 is at boiling point"

// if (temp < boilingPoint) {
//     console.log(temp, "is below boiling point") 
// } else if(temp > boilingPoint) {
//     console.log(temp, "is above boiling point")
// } else if(temp === boilingPoint) {
//     console.log(temp, "is at boiling point")
// }

// (Guan)
// Describe your process: So the first thing that I need to do it to find out what the boiling point is, which is 212 degrees F.
// The temp of the varible will be either above or below or equal 212 F(int) and there needs to be a check / comparision to see if the variable meet the criteria. I will 
// a conditional statement to help me sort the variables to the right place.

if(temp == 212) {
  console.log(`${temp} is at boiling point`)
} else if (temp > 212) {
  console.log(`${temp} is above boiling point`)
} else if (temp < 212) {
  console.log(`${temp} is below boiling point`)
} else {
  console.log("error")
}


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// (Nico)
// Describe your process:
// In order to create the code that will combine the two arrays and return the length using the test variables provided below I will need to utilize the .concat() method to merge the two arrays.
//By doing this the original array(s) is unchanged and just combined.
//I will use the "let" command to establish each array to designate the Padres 1984, and Padres 1988 World Series Runs, and then use the "console.log" command in conjuction with the .concat command followed by the .length.
//Afterwards I will use "comboArrays" to establish the variable for the combined arrays.


// (Joseph)
    // First we have to concat both arrays into 1 array. After that, we will .length to get the new length of the array.

    
    // console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

// (Matthew)
// Use .split to take the string to an array
// I will need to use .reverse to reverse the order of the string
// Use .join to take the array back to a string and output the new string
// Expected output: "2202 tortxoF"

const currentCohort = "Foxtrot 2022"
console.log(currentCohort.split("").reverse().join(""))

// (Heath)
// Describe your process:
// const currentCohort = ["Foxtrot 2022"]
// // first you want to split all of the elements using .split
// let split = "Foxtrot 2022".split("")
// console.log(split)
// // outcome = "F", "o", "x", "t", "r", "o", "t", "2", "0", "2", "2"
// // then reverse the elements of the split array
// let reversedArray = split.reverse()
// console.log(reversedArray)
// // outcome = 2 2 0 2 t o r t x o f in "" separated by commas
 // //then you'd want to join the reversed and split elements using .join
 // let joinedElements = reversedArray.join("")
 // console.log(joinedElements)
// // Expected output: "2202 tortxoF"
// actual outcome was as expected

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

// given the verbiage of the problem we know lastIndexOf method will be used
// we are given the number we have to look for in the array myNumbers - 42. We are going to use variable givenValue1/givenValue1 as an argument in the method lastIndexOf.
// lastly we are going to console.log using method chaining with the values provided
const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(givenValue1))

// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))

// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// This one is definitely a little confusing for me as far as methods go. After re-reading through the syllabus, I found the .sort() function which I believe will work well for this purpose. I'll need to console.log() the variable holding the array, then apply .sort() to it.
// In the given example on the syllabus, the function is looking for smallest to largest - ((a, b) => a - b).
// This function will take two arguments, a & b.
// Then, the function will subtract value b from value a.

// I had to do a little research to understand this one. Here's what I learned:
// The .sort() method cannot automatically work on numbers. You have to give it an argument so that the logic will understand what result you want.
// When the function runs, it's going to return a positive, negative, or 0 value.
// As the function continues to subtract numbers from each other, it's going to order them from either negative or positive numbers first depending on what argument you pass it. For our case, I wanted it to start with the negative integers, so I placed the second argument first in the function.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a));
console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a));

//----------- AFTER RUNNING -----------
// The output I got for sanDiegoSummerTemperatures was 82, 80, 79, 77, 76, 73, 72 as expected. The output I got for sanDiegoWinterTemperatures was 68, 67, 66, 66, 62, 59, 59 as expected. I feel like I mostly understand how this works, but I'm getting a little stuck on the math it's actually performing to the Array. I'm not sure if its subtracting ALL the numbers from each other, or just in chronological order.