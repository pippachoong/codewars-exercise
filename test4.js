// accpets a username and return turue if it's acceptable and false if it's null
// valid username:
// 4 characters long
// contain only letters,numbers and only one _
// start with a letter & musnt end with _


function validate(username) {
    // string to array
    let array = username.split("")


    if (lengthUnder4(array) || containsInvalidCharacters(array) || invalidFirstOrLastChar(array)) {
        return false
    }
    return true
}

function lengthUnder4(usernameArray) {
    return usernameArray.length < 4
}

function containsInvalidCharacters(usernameArray) {
    acceptedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321_".split("")

    let invalidChars = usernameArray.filter(char => !acceptedChars.includes(char))
    let underscores = usernameArray.filter(char => char === "_")

    if (underscores.length > 1 || invalidChars.length > 0) {
        return true
    } else {
        return false
    }
}

function invalidFirstOrLastChar(usernameArray) {
    let firstChar = usernameArray[0]
    let lastChar = usernameArray[usernameArray.length - 1]

    let acceptedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (!acceptedChars.includes(firstChar) || lastChar === "_") {
        return true
    } else {
        return false
    }
}

console.log(validate('Liam_Steward')); // Valid username
console.log(validate('Liam Steward')); // Invalid username