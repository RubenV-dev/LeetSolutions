// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

 

// Example 1:

// Input: num = 3
// Output: "III"
// Example 2:

// Input: num = 4
// Output: "IV"
// Example 3:

// Input: num = 9
// Output: "IX"
// Example 4:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= num <= 3999

//Our approach to this problem will be to continuously subtract the largest value in our array
// from a given number while simultanously adding the corresponding Roman Numeral to 
// our returnedString. 

let intToRoman = (num) => {
    //the lengths of our numerals and numeralValues will be constant and will not change
    //regardless of how large of an input number we are given.
    let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    //we initialize our variable that will hold the roman numeral string
    let returnedString = ""
    
    //we can either iterate the numerals array or the numeralValues Array, it doesnt 
    // make a difference since the lengths of both arrays are the same. It is also 
    // important to note that both roman numeral and its value are associated by index
    // from each array.
    // Ex. numerals[0] =>  "M", numeralValues[0] => 1000, 
    for (let i = 0; i < numerals.length; i++) {
        // in each iteration we will subtract the currentValue while adding the corresponding
        // romanNumeral to our returnedString. We will continue to subract until our num 
        // is less than or equal to 0.
        while (num - numeralValues[i] >= 0) {    
            returnedString += numerals[i]
            num -= numeralValues[i]  
        }
    }
    
    return returnedString
};