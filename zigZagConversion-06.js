// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

//need to add an explanation here
let convert = function(s, numRows) {
    let length = s.length
    let returnString = ""
    
    if (numRows > length || numRows <= 1) {
        return s
    }
    let interval = 2 * numRows - 2
    
    for (let i = 0; i < numRows; i++) {
        let step = interval - 2 * i
        for (let j = i; j < length; j += interval) {
            // returnArray[count] = s.charAt(j)
            returnString += s.charAt(j)
            if (step > 0 && step < interval && j+step < length ) {
                returnString += s.charAt(j + step)
            }
        }
    }
    return returnString
}