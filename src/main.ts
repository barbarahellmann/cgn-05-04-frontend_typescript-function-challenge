// Step 1:
// Create an array of numbers. Use the '.map' function to double all the numbers in the array.

const simpleNumbers: number[] = [5,10,15,20,25]

const doubleNumbers: number[] = simpleNumbers.map(((number: number) => number * 2))  // => ist ein implizierter return

console.log("Einfache Zahlenfolge: " + simpleNumbers)
console.log("Jede Zahl verdoppelt: " + doubleNumbers)




// Step 2:
// Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const arrayOfWords: String[] = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen"]

const filteredWords = arrayOfWords.filter((String) => String.length > 5);
console.log("Liste an Wörtern: " + arrayOfWords)
console.log("Wörter mit mehr als 5 Zeichen: " + filteredWords)




// Step 3:
// Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
// ??? Das scheint mir zu kompliziert um richtig zu sein???


const arrayOfNumbers: number [] = [2,4,6,8,10]
const initialValue = 0;
const sumNumbers = arrayOfNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,initialValue);
// Das scheint mir zu kompliziert um richtig zu sein???

console.log("Liste an Zahlen: " + arrayOfNumbers)
// ??? wie kann ich auf einzelne Elemente zugreifen? Mit charAt???
console.log("Summe: " + sumNumbers)




// Step 4:
// Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.

const nextArray: number [] = [6,8,10,12,14]

const biggerThenTen = (nextArray.some((number: number) => number > 10))
if (biggerThenTen) {
    console.log(nextArray + " hat einen Wert > 10");
} else {
    console.log(nextArray + " hat keinen Wert > 10");
}

// Gegentest zu Step 4

const arrayOfNumbers3: number [] = [2,4,6,8]
if (biggerThenTen) {
    console.log(arrayOfNumbers3 + " hat einen Wert > 10");
} else {
    console.log(arrayOfNumbers3 + " hat keinen Wert > 10");
}


//BONUS

// Use only array functions for the following tasks.
// Take this list of numbers:
// const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
// Sort these numbers in descending order.
// Square these numbers.
// Remove the lowest two numbers and the highest 4 numbers from the list.
// Remove all numbers that are divisible by 4.
// Add up all the numbers.
// What is the result?

const longNumberList = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
console.log("Gegebene Liste: " + longNumberList)

console.log("In ascending sortiert: " + longNumberList.sort())

console.log("In decending sortiert: " + longNumberList.sort(function(a,b){return b - a;}));

const squareNumbers: number[] = longNumberList.map(((number: number) => number * number))
console.log("Quadrierte Zahlen: " + squareNumbers)

const lessNumbers = squareNumbers.slice(4,-2)
console.log("Ohne die niedrigsten 2 und höchsten 4 Zahlen: " + lessNumbers)

const devidableBy4: number[] = lessNumbers.filter((number => number % 4 !== 0));
console.log("Ohne die Zahlen, die durch 4 teilbar sind: " + devidableBy4)

const result: number[] = devidableBy4.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log("The result is: " + result)