// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // S = "?ab??a"
    // convert string to array
    let fullArray = S.split("")

    let halfIndex = Math.ceil(fullArray.length / 2)
    let firstHalf = fullArray.slice(0, halfIndex) // [?, a, b]
    let secondHalf = fullArray.slice(halfIndex).reverse() // [a, ?, ?]

    let palindromeImpossible = false

    // if one array has ?, copy the same value from the other array
    firstHalf = firstHalf.map((element, index) => {
        if (firstHalf[index] === "?") {
            return secondHalf[index]
        } else if (firstHalf[index] !== secondHalf[index] && secondHalf[index] !== "?" && secondHalf[index] !== undefined) {
            palindromeImpossible = true
        }
        return element
    })

    secondHalf = secondHalf.map((element, index) => {
        if (secondHalf[index] === "?") {
            return firstHalf[index]
        } else if (firstHalf[index] !== secondHalf[index] && firstHalf[index] !== "?" && firstHalf[index] !== undefined) {
            palindromeImpossible = true
        }
        return element
    })

    let result

    if (palindromeImpossible) {
        result = "NO"
    } else {
        firstHalf = firstHalf.join("")
        secondHalf = secondHalf.reverse().join("")
        result = firstHalf + secondHalf
        result = result.replace(/\?/g, 'z')
    }
    return result

}
