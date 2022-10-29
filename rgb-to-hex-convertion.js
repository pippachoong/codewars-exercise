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


// // step 1 
const numberToHex = (number) => {
    let array = "0123456789ABCDEF".split("")
    // console.log(array);
    let output = array[number]
    // console.log(output);
    return output
}

// // step 2 get decimal from the value input
const decimalToHex = (number) => {
    let remainder = (number) / 16 // e.g.15.3
    decimalOfRemainder = ((remainder % 1).toFixed(4)) * 16
    return decimalOfRemainder
}

// step 3 - get integer fromn the value input
const decimalToHex = (number) => {
    let integerValue = (Math.trunc(number)) / 16
    return integerValue
}



// Example 1: (4253)10 = (109D) 16

// 4253 ÷ 16 = 265.8125
// 0.8125 * 16 = 13(Remainder 13, equivalent to D in hexadecimal)
// 265 ÷ 16 = 16.5625
// 0.5625 * 16 = 9(Remainder 9)
// 16 ÷ 16 = 1(Remainder 0)
// 1 ÷ 16 = 0.0625
// 0.00625 * 16: 1(Remainder 1)

// Read the remainders from the most significant to the least - from bottom to top: 109D.
// 109D the hex equivalent of(4253)10