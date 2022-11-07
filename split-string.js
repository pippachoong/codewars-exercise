// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

//   Examples:

// 'abc' => ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']


const solution = (str) => {


    let strArray = str.split("") // [a,b,c,d,e]
    let output = []
    if (strArray.length % 2 === 1) {
        strArray.push("_")//"c,_"
    }
    while (strArray.length >= 2) {
        let pairString = strArray.splice(0, 2).join("") // "ab"
        output.push(pairString)

    }

    return output
    console.log(pairString)


}


// function solution(str) {
//     var i = 0;
//     var result = new Array();
//     if (str.length % 2 !== 0) {
//         str = str + '_';
//     }
//     while (i < str.length) {
//         result.push(str[i] + str[i + 1]);
//         i += 2;
//     }
//     return result;
// }