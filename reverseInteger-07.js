// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within 
// the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this 
// problem, assume that your function returns 0 when the reversed integer overflows.

let reverse = (x) => {
    const limit = 2 ** 31  
    //we first take the given value and save whether or not it was a negative or positive
    // integer.
    const sign = x < 0? -1 : 1
    //we then take the absolute value eliminating the sign and then stringify the value.
    let string = Math.abs(x).toString()
    
    let returnedString = ""
    //we will iterate through the string and constantly add each digit to the beginning
    // of the returnedString.
    for (let i = 0; i < string.length; i++) {
        returnedString = string.charAt(i) + returnedString 
    }
    //finally we check if there was any overflow in the value we will return 0,
    // if there isnt then we will return the number form of our return string and convert
    // to the original sign by multiplying by sign.
    return Number(returnedString) > limit? 0 : Number(returnedString) * sign

}
