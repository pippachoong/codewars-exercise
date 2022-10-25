// Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

//     Don't forget the space after the closing parentheses!


const createPhoneNumber = (numbers) => {




    // break array using slice()
    // array to string - join('')
    partOne = numbers.slice(0, 3).join("")
    // partOne.unshift("(")
    // partOne.push(") ")

    // console.log(partOne)

    partTwo = numbers.slice(3, 6).join("")
    // partTwo.push("-")
    // console.log(partTwo)

    partThree = numbers.slice(-4).join("")

    // combine and make into string with concat()
    // const combinedNumbers = partOne.concat(partTwo, partThree).join('')
    const combinedNumbers = `(${partOne}) ${partTwo}-${partThree}`
    console.log(combinedNumbers)

    return combinedNumbers


}