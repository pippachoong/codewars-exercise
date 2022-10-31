// Find the missing letter
// Write a method that takes an array of consecutive(increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array.And it will be always exactly one letter be missing.The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a', 'b', 'c', 'd', 'f'] -> 'e'
// ['O', 'Q', 'R', 'S'] -> 'P'
//         (Use the English alphabet with 26 letters!)

const findMissingLetter = (inputArray) => {
    // alphabets from a-z
    const alphabets = "abcdefghijklmnopqrstuvwxyz"

    // how to detect lower case and upper case arguments
    const isUpperCase = (inputArray[0] === inputArray[0].toUpperCase())

    // check if arguments are in uppercase form. If yes, make var alphabets to upper case and split into array. If not, just split into array.
    const alphabetArray = isUpperCase ? alphabets.toUpperCase().split("") : alphabets.split("")

    // comparisonArray // ['a', 'b', 'c', 'd', 'f']
    // inputArray // ['a', 'b', 'c', 'd', 'e', 'f']

    const firstAlphabet = inputArray[0] // a
    const lengthOfArray = inputArray.length + 1 // +1 to include the missing alphabet. eg 5 => 6
    const indexToStart = alphabetArray.indexOf(firstAlphabet)

    const comparisonArray = alphabetArray.slice(indexToStart, indexToStart + lengthOfArray)
    console.log(compari)

    for (let i = 0; i < comparisonArray.length; i++) {
        if (comparisonArray[i] !== inputArray[i]) {
            return comparisonArray[i]
        }
    }
}

// compare this alphabetArray with given array to find missing letters