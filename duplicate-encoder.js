// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

//     Examples
// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages.If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


const duplicateEncode = (word) => {
    // let updatedWord = word.toLowerCase()
    // need to make an array to loop through if there's identical character
    let array = word.toLowerCase().split("")
    // console.log(array)
    let anyDuplicates = {}
    // console.log(anyDuplicates)


    // loop through elements in the array
    array.forEach(str => {
        // if there is a value already in the object under the specific key , meaning there is a repeat, update value to ')'
        // e.g 
        // anyDuplicate = {
        //     c: ')',
        //     d: '(',
        //     w: '('
        // }
        if (anyDuplicates[str] !== undefined) {
            anyDuplicates[str] = ")"
        } else {
            anyDuplicates[str] = "("
        }
    })

    /*
        array = ["c", "d", "d", "w"]
        output = [")", "(", "(", "("].join() => )(((
    */
    //                                 anyDuplicates['c'] <- getting value from object
    let output = array.map(char => anyDuplicates[char]).join("")
    return output
}
