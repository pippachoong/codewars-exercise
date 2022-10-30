// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.Additionally, if the number is negative, return 0(for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.




const solution = (number) => {

    let arrayOutput = []


    for (let i = 0; i < number; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            arrayOutput.push(i)
        } else if (i < 0) {
            return 0
        }
    }
    let output = arrayOutput.reduce((total, currentElement) => {
        return total + currentElement
    }, 0)

    return output

}

const solution2 = number => {
    if (number < 0) {
        return 0
    }

    let currentNumber = 0
    let sum = 0
    while (currentNumber < number) {
        if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
            sum += currentNumber
        }
        currentNumber++
    }
    return sum
}