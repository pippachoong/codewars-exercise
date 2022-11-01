// Write a function that takes a string of braces, and determines if the order of the braces is valid.It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets[], and curly braces { }. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{ }.

// What is considered Valid ?
//     A string of braces is considered valid if all braces are matched with the correct brace.

//         Examples
// "(){}[]"   => True
// "([{}])"   => True
// "(}"       => False
// "[(])"     => False
// "[({})](]" => False

function validBraces(braces) {

    let arrayBraces = braces.split("")
    // first condition - check if the number of char is even numbers as odd number means brackets are not closed
    if (arrayBraces.length % 2 !== 0) {
        return false
    }
    // second condition - check if second character matches 
    //third condition - if not, go through array.length, need to be even number , split in half, check if first half of array matches and second half of array. 

    const openingBraces = "([{".split("")
    const closingBraces = ")]}".split("")
    let expectedClosers = []
    let result = true

    arrayBraces.forEach((element) => { // element = ]
        if (openingBraces.includes(element)) { // (
            const indexOfBrace = openingBraces.indexOf(element) // 0
            const matchingCloser = closingBraces[indexOfBrace] // closingBraces[0] => )
            expectedClosers.unshift(matchingCloser)

        } else { // ]
            if (expectedClosers[0] === element) { // ) == ]
                expectedClosers.shift()
            } else {
                result = false
                return result // stop functioning, return the result of false
            }
        }
    });

    if (expectedClosers.length != 0) {
        result = false
    }

    return result

}