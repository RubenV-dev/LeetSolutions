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
//____________________________________________________________________________________________________

//Diagram I

// Input: "PAYPALISHIRING"
// Output: "PAHNAPLSIIGYIR"
// numRows: 3 or row length = 3

// P   A   H   N
// A P L S I I G
// Y   I   R

// At first glance, there is no intuitive pattern that we see between the letters and their index.
// We first add bars and a label for each vertical column to visualize our logic. We also add the
// row number and we get:

//  C1   C2    C3    C4
// 
// |P|   |A|   |H|   |N|     Row 0
// |A| P |L| S |I| I |G|     Row 1
// |Y|   |I|   |R|           Row 2

// We then also assign the corresponding index from the original string to the left of each letter
// and we get:

//  C1      C2       C3        C4
// 
// 0|P|    4|A|     8|H|     12|N|     Row0
// 1|A| 3P 5|L| 7S  9|I| 11I 13|G|     Row1
// 2|Y|    6|I|    10|R|               Row2

// We will then add the new index of each value in the output string to the right of each letter and
// get:

//   C1          C2            C3             C4
// 
// 0|P|0       4|A|1         8|H|2         12|N|3      Row0
// 1|A|4   3P5 5|L|6   7S7   9|I|8   11I9  13|G|10     Row1
// 2|Y|11      6|I|12       10|R|13                    Row2

// Now we are preped to see patterns in our zigZag string.

// We first identify the presence of what we will call an Interval which represents the distance 
// between the index of the letters in each vertical column denoted c1,c2,c3, and c4.

// If we look at the top of each column we see:
// c1 has P with an original index of 0,
// c2 has A with an original index of 4,
// c3 has H with an original index of 8,
// c4 has N with an original index of 12

// The interval for this example seems to be a difference of 4 and we must remember for this
// example we were given numRows = 3. So now we must find how this interval relates to given
// num of rows.

// We must look at different examples to find our pattern.
// If you look at numRows = 2 you see an interval of 2,
// If you look at numRows = 4 you see an interval of 5,
// If you look at numRows = 5 you see an interval of 8

// If you compare each number and look for their relationship you will see interval = 2(numRows) - 2
// which isnt very intuative to see but you will notice that this relationship explains how interval
// and num of rows relate. 

// After we find the interval we will now introduce the concept of step which represents the
// difference between the index of each letter in a column and non-column letters.

//   C1          C2            C3             C4
// 
// 0|P|0       4|A|1         8|H|2         12|N|3      Row0
// 1|A|4   3P5 5|L|6   7S7   9|I|8   11I9  13|G|10     Row1
// 2|Y|11      6|I|12       10|R|13                    Row2

// In this example we see that Row 1 has values that are not in labeled columns and the difference
// between the index of the original strings are 2 (A index 1 and P index 3 and L index 5 and S 
// index 7 etc...). However, it is also important to see that row0 and row2 do not have values so 
// there are presumably no letters in step.

//                  C1          C2            C3             C4
// 
//Step 4          0|P|0       4|A|1         8|H|2         12|N|3      Row0
//Step 2          1|A|4   3P5 5|L|6   7S7   9|I|8   11I9  13|G|10     Row1
//Step 0          2|Y|11      6|I|12       10|R|13                    Row2

// The step formula can be deciphered after seeing many examples and comparing their intervals,
// and row index. The formula that eventually comes out is Step = interval - 2i where i is the 
// row index when we iterate through each row.

// What I understand step to be is a value between the range 0 and interval that does not include
// 0 and its interval. If we calculate step, at each iteration of a row and we see that it is in 
// that range, then we have a situation where a letter would be added to our returned string that 
// is step indexes away from our current letter.

// In our example as we iterate through each row, we will then iterate our given string and keep 
// adding the letters in each column across each row. We would begin at P then add A then H then 
// N from row 0. Our loop would then take us to row 1 and we would add A to our returnedString. 

// But, because step is 2 and is now in our range between (0 and interval=4),and we are not above our
// string length when we add the current index + (step = 2) then we add the character at
// string[currentIndex + step] to our returnedString. In this case current index is 1 so we add 
// string[1+2], or P.

// At every iteration in this row ,step will be in our range, so we add the letter step distance
// away from each so after L we add S, after I we add I, and after G we do not add anything
// because currentIndex + step would go above string length.



let convert = function(s, numRows) {

    let returnString = ""
    //if the number of rows provided is greater than the length of the string or if its less than 1,
    // then the string will not be altered, so we would return the given string.
    if (numRows > s.length || numRows <= 1) {
        return s
    }
    //conceptually, refer to diagram 1 to visualize interval and step
    let interval = 2 * numRows - 2
    // we iterate each row
    for (let i = 0; i < numRows; i++) {
        // calculate step at each row using this formula:
        let step = interval - 2 * i
        // at each row iterate our string by interval to get our column letters explained in
        // diagram 1
        for (let j = i; j < s.length; j += interval) {
            // add each column letter to our returnedString
            returnString += s.charAt(j)
             //check if step is between (0...interval) then add letters step distance away
            //  from your current indexed letter.
            if (step > 0 && step < interval && j+step < s.length ) {
                returnString += s.charAt(j + step)
            }
        }
    }
    return returnString
}