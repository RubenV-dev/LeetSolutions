// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within 
// the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this 
// problem, assume that your function returns 0 when the reversed integer overflows.

let reverse = (x) => {
    const limit = 2 ** 31  
    const sign = x < 0? -1 : 1
    let string = Math.abs(x).toString()
    let returnedString = ""

    for (let i = 0; i < string.length; i++) {
        returnedString = string.charAt(i) + returnedString 
    }

    return Number(returnedString) > limit? 0 : Number(returnedString) * sign

}
