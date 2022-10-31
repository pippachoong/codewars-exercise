// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""

function solution(string) {
    const wordArray = string.split("")
    const result = wordArray.map(char => {
        if (char.toUpperCase() === char) {
            return ' ' + char
        } else {
            return char
        }
    })
    return result.join("")

}
