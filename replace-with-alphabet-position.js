// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//     Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)


const alphabetPosition = (text) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); // ['a','b','c', ...]

    let splittedText = text.toLowerCase().split('') // ['s','u','n', '!', ...]
    let filteredText = []
    for (let i = 0; i < splittedText.length; i++) {
        const char = splittedText[i];
        if (alphabet.includes(char)) {
            filteredText.push(char)
        }

    }
    // shorter version using array filter()
    // let filteredText = splittedText.filter(char => alphabet.includes(char) )

    let numberedText = []
    for (let i = 0; i < filteredText.length; i++) {
        const char = filteredText[i];
        numberedText.push(alphabet.indexOf(char) + 1) // a is 1 not 0 thus + 1
    }
    // shorter version using array map()
    // let numberedText = filteredText.map(char => alphabet.indexOf(char) + 1)
    console.log(numberedText);

    let result = numberedText.join(' ')
    console.log(result);
    return result
}




