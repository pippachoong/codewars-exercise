// The rgb function is incomplete.Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

//     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) # returns FFFFFF
// rgb(255, 255, 300) # returns FFFFFF
// rgb(0, 0, 0) # returns 000000
// rgb(148, 0, 211) # returns 9400D3
// "0123456789ABCDEF"
// string to array
// find index (n)

const rgb = (r, g, b) => {



    return `${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`

}

const numberToHex = (number) => {
    let array = "0123456789ABCDEF".split("")

    if (number < 0) {
        return "00"
    } else if (number > 255) {
        return "FF"
    }

    let firstHexIndex = Math.floor(number / 16)
    let firstHexValue = array[firstHexIndex]
    let secondHexIndex = number % 16
    let secondHexValue = array[secondHexIndex]

    return `${firstHexValue}${secondHexValue}`
}



    // Decimal to hexadecimal conversion -  achieved by applying the repeated division and remainder algorithm.Simply put, the decimal number is repeatedly divided by the radix 16. In between these divisions, the remainders give the hex equivalent in reverse order.

    // step 2 get decimal from the value input
    // const decimalToHex = (number) => {
    //     let remainder = (number) / 16 // e.g.15.3
    //     decimalOfRemainder = ((remainder % 1).toFixed(4)) * 16
    //     return decimalOfRemainder
    // }

    // // step 3 - get integer fromn the value input
    // const integerToHex = (number) => {
    //     let integerValue = (Math.trunc(number)) / 16
    //     return integerValue
    // }


    // if value is < 16 , step 1
    // if value is > 16, go for step 2 & 3 until value is < 16
    // decimalToHex is the output for hex values


