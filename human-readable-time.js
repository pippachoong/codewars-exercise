// DESCRIPTION:
// Write a function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)

// You can find some examples in the test fixtures.

function humanReadable(input) {
    // 1 hour = 3600 seconds
    // 1 min = 60 sec
    // 4000sec/3600sec = 1.1 hour
    let hour = Math.floor(input / 3600)
    let minutes = Math.floor(input % 3600 / 60) // 6.666 minutes
    let seconds = input % 60

    hour = hour > 9 ? hour.toString() : "0" + hour.toString()
    minutes = minutes > 9 ? minutes.toString() : "0" + minutes.toString()
    seconds = seconds > 9 ? seconds.toString() : "0" + seconds.toString()

    return `${hour}:${minutes}:${seconds}`
}