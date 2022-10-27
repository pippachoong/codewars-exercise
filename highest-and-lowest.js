// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//     Examples
// high_and_low("1 2 3 4 5")  # return "5 1"
// high_and_low("1 2 -3 4 5") # return "5 -3"
// high_and_low("1 9 3 4 -5") # return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

const highAndLow = (numbers) => {
    // create string and make into an array 
    // sort() to get ascending order in an array
    // to sort numbers, sort((a, b) => a - b)
    const array = numbers.split(" ").sort((a, b) => a - b)
    // console.log(array);

    // loop through array and get higest number
    const HighestNumber = array[array.length - 1]
    // loop through array and get lowest number
    const lowestNumber = array[0]

    const output = `${HighestNumber} ${lowestNumber}`

    return output
}
