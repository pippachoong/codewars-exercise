// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).

//     Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"




const toCamelCase = (str) => {
    let strArray
    if (str.includes("_")) {
        strArray = str.split("_")
    } else {
        strArray = str.split("-")
    }

    strArray.map((word, index) => {
        if (index === 0) {
            return word
        } else {
            let wordArray = word.split("")
            wordArray[0] = wordArray[0].toUpperCase()
            return wordArray.join("")
        }
    });

    return strArray.join("")

    // alphabet in front of "-" or "_" to be made upper case letter
    // string to array - split "-" or "_"
    // join the words

    // split("") to make an array first
    // map it , if char includes "_" or "-"

}
