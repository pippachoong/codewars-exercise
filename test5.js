// a function which calculates average height, takes one argument which is an object whose properties are instances of a Person class 


function getAvgHeight(data) {

    let persons = Object.keys(data)
    // ["Mike", "Sam"]

    if (persons.length === 0) {
        return null
    } else {
        let arrayHeight = persons.map(person => data[person].height)
        let averageHeights = arrayHeight.reduce((total, curr) => total + curr, 0) / persons.length

        return averageHeights
    }


}

var avgHeight = getAvgHeight({
    Mike: { height: 174, weight: 69 },
    Sam: { height: 190, weight: 103 }
});
console.log(avgHeight);