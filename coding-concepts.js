// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: The array colors with indigo added ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: Output was 5 because the output of push method will return the length of the new array


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

//(Athian)
// a) Your answer: I think it will show 10 i think i remember during the lectures that one of the mentors saying the space counts as a character
// b) Verify and explain: i was correct in my educated guess, after un commenting and testing the code, the number 10 was printed out

// (Christian)
// a) Your answer: value of 10 will produce
// b) Verify and explain: 10 is correct, .length will give the amount of every charater including space


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:
// b) Verify and explain:

//(David)
// a) Your answer: it will return the letter "o"
// b) Verify and explain: it is correct because the [4] in the console log after greeting is telling it to return the value of the 4th index, which the index always starts at 0 resulting in the "o" being in the 4th index location

// (Kyle)
// a) Your answer: o
// b) Verify and explain: I was right :D, since we are returning the greeting with the index brackets with a 4 in it it should return o ==> H[0]e[1]l[2]l[3]o[4] [5]


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:
// b) Verify and explain:

// (Zack)
// a) Your answer: Based on the zero based index the 1 index is Ruby.
// b) Verify and explain: It was correct! Zero based index is how to correctly establish what element is being talked about, because the first element in an array is 0 followed by 1,2 and etc.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
// b) Verify and explain:

// (Jeremy)
// a) Your answer:
// Expected Output: ERROR Message
// Explanation: this should return an error since the toUpperCase() works for
// strings, and not arrays. You would need to access the strings in the array
// individually and call the toUpperCase() method on each string to make them
// capitalized.

//------------------------------------------------------------------------------
// Examples:
    console.log(weekendDays[0].toUpperCase()) //Expected Output: 'SATURDAY'
    console.log(weekendDays[1].toUpperCase()) //Expected Output: 'SUNDAY'
    console.log(weekendDays.toString().toUpperCase())
//  Expected Output: 'SATURDAY,SUNDAY'
//------------------------------------------------------------------------------

// b) Verify and explain:
// according to: MDN Web Docs, the toUpperCase() method is used to convert
// strings to uppercase.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:
// b) Verify and explain:

// (Ari)
// a) Your answer: I believe this is going to return "number". It's asking typeof to look at the LENGTH of the array, and not the array itself.

// b) Verify and explain: I was right! It was "number", because the length of the array dataTypes is 3, which is a number. If you typed: console.log(typeof dataTypes), it will return "object". (I know this because I checked in dev tools after I ran the code!)

// (Lyssa)
// a) Your answer: number
// b) Verify and explain: the length of dataTypes is evqluated as "3", which is then typed as a number.