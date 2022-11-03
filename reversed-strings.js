// Complete the solution so that it reverses the string passed into it.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

const solution = (str) => {
    let stringArray = str.split("").reverse().join("")
    return stringArray

}