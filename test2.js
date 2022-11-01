// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 14)
    let splitNumbers = N.toString().split("") // 40 => ["4", "0"]
    let numberSum = splitNumbers
        .map(element => Number(element))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0)

    let targetNumber = numberSum * 2 // 8
    let minDigits = Math.ceil(targetNumber / 9) // 1
    if (N >= 100 && minDigits < 3) {
        minDigits = 3
    } else if (N >= 10 && minDigits < 2) { // minDigit < 2 making sure it doenst give single value
        minDigits = 2
    }
    let numbersToSum = [] // [1,1]

    for (let i = 0; i < minDigits; i++) {
        if (minDigits === splitNumbers.length) {
            numbersToSum.push(splitNumbers[0])
        } else {
            numbersToSum.push(1)
        }
    }

    let numbersToSumIndex = 0
    while (numbersToSum.reduce((a, b) => a + b) < targetNumber) {
        if (numbersToSum[numbersToSumIndex] < 9) {
            numbersToSum[numbersToSumIndex]++
        } else {
            numbersToSumIndex++
        }
    }

    return Number(numbersToSum.reverse().join(""))
}
