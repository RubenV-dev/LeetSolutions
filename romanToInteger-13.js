// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, 
// which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for 
// four is not IIII. Instead, the number four is written as IV. Because the one is before the five we 
// subtract it making four. The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3

// Example 2:
// Input: s = "IV"
// Output: 4

// Example 3:
// Input: s = "IX"
// Output: 9

// Example 4:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 5:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function(s) {
    //First I set up a hashmap that will contain the roman numerals and their corresponding value.
    let romanToInt = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    //total will be the place where we add the values that we decode from the roman numerals.
    let total = 0
    
    for (let i = 0; i < s.length; i++) {
        //here we have two pointers, the current index will give us a value once its passed into our romanToInt
        //hash and the second pointer is pointing to the next index's value
        let currentInt = romanToInt[s[i]]
        let nextInt = romanToInt[s[i + 1]]
        //we continue to check for nextInt as we iterate. When we reach the end of the string there wont be 
        // a nextInt and when that is undefined then we will stop iterating and simply add the currentInt to
        // the total
        if (nextInt) {
            //As we traverse the string, we check to see if the currentInt is more than or equal to the nextInt.
            // This is to check for those 6 cases where Roman numerals like IV = 4 and IX = 9. If it is more
            // or equal we add it to the total.
            if (currentInt >= nextInt) {
                total += currentInt
            // if the nextInt is more than the currentInt then we have one of the 6 special cases where we must
            // look at two roman numerals together and use their difference to reprsent the value of the roman numerals
            // in the provided string. We take their difference and increment i by 1. In the next loop the i increments
            // by 1 again which allows us to start from an unused roman numeral.
            } else {
                total += (nextInt - currentInt)
                i++
            }
        } else {
            total += currentInt
        }
    }
    return total
};