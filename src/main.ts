// Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.

const simpleNumbers: number[] = [5,10,15,20,25]

const doubleNumbers: number[] = simpleNumbers.map(((number: number) => number * 2))  // => ist ein implizierter return

console.log("Einfache Zahlenfolge: " + simpleNumbers)
console.log("Jede Zahl verdoppelt: " + doubleNumbers)

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const arrayOfWords: String[] = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen"]

const filteredWords = arrayOfWords.filter((String) => String.length > 5);
console.log("Liste an Wörtern: " + arrayOfWords)
console.log("Wörter mit mehr als 5 Zeichen: " + filteredWords)

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.

// Das scheint mir zu kompliziert um richtig zu sein???


const arrayOfNumbers: number [] = [2,4,6,8,10]
const initialValue = 0;
const sumNumbers = arrayOfNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,initialValue);

console.log("Liste an Zahlen: " + arrayOfNumbers)
// Open: wie kann ich auf einzelne Elemente zugreifen? Mit charAt???
console.log("Summe: " + sumNumbers)

// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.

const arrayOfNumbers2: number [] = [6,8,10,12,14]
const biggerThenTen = (element) => element > 10;
if (arrayOfNumbers2.some(biggerThenTen)) {
    console.log(arrayOfNumbers2 + " hat einen Wert > 10");
} else{
    console.log(arrayOfNumbers2 + " hat keinen Wert > 10");
}

const arrayOfNumbers3: number [] = [2,4,6,8]
if (arrayOfNumbers3.some(biggerThenTen)) {
    console.log(arrayOfNumbers3 + " hat einen Wert > 10");
} else{
    console.log(arrayOfNumbers3 + " hat keinen Wert > 10");
}