// Write a function:

//     function solution(A);

// that, given an array A of N integers, returns the smallest positive integer(greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range[1..100, 000];
// each element of array A is an integer within the range[−1, 000, 000..1, 000, 000].




function solution(A) {


    let orderedArray = A.sort((a, b) => a - b)// to get it sequenced 
    // save an array with positive integers only
    let postiveIntegerArray = orderedArray.filter(num => num > 0)

    let smallestInteger = 1
    if (postiveIntegerArray.length === 0) {
        return smallestInteger
    }
    while (postiveIntegerArray.includes(smallestInteger)) {
        smallestInteger++
    }
    return smallestInteger



}


