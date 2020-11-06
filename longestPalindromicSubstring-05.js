// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case)

// Explanation: The approach for this solution will be one where we expand from a given index and continuously check if the
// expanded substring is a palindrome. We will find the largest substring that is a palindrome and save the length, and both string 
// indexes into memory.

let longestPalindrome = (s) => {

    if (s.length < 1) {
        return " "
    }
    // we will declare these variables which will store our data as we iterate through the substrings
    let maxLen = 0
    let start = 0
    let end = 0

    // we start off by iterating through the given string giving us access to each index and every letter
    for (let i = 0; i < s.length; i++) {

        // we destructure the returned object from our expandFromIndex helper method and save it to the provided variables
        // this first call to our helper will check for palindromes with only 1 letter centers. For example in abba we expand from
        // a then b then b then a.
        [length , left, right] = expandFromIndex(s, i, i)
        // if the returned length is larger than what is stored in maxLen, update all of the following variables:
        if (length > maxLen) {
            maxLen = length
            start = left
            end = right
        }
        // we once again call our helper function for the largest substr palindrome. This call will check all palindromes with 2 
        // letter centers. For example in abba we are expanding from ab then bb and then ab.
        [length , left, right] = expandFromIndex(s, i, i+1)

        if (length > maxLen) {
            maxLen = length
            start = left
            end = right
        }
    }
    // by this point we have stored the starting index, largest length and end index of the largest substring, we will now use
    // the slice method to return the substring since we have both the starting and ending index.

    // Special Note:
    // If you try to use to substr method keep in mind it requires the starting index and the length of the string not the end index
    // so to use s.substr() you would have to pass start and maxLen. It is however much slower when submitting it on leetcode.
    return s.slice(start, end + 1)


}

// This helper method will do the bulk of our work. It will take an index and assign them to pointers. We will expand the left
// pointer to the left by subtracting 1 and the right pointer to the right by adding 1. It will continue to expand provided the
// we have a palindrome every step of the way.
let expandFromIndex = (s, left, right) => {
    //If you have a null string there would be no palindrome so we would return a length of 0. 
    if (s === null || right < left) {
        return 0
    }
    //while we are within the boundaries of the string which is left index of 0 and right index of s.length - 1 we will
    // expand and check that each letter is strictly equal to one another. In the case of 1 center point the char at the same index
    // will be the same, in the case of two center points, both would need to be equal for our loop to proceed.
    while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left -= 1
        right += 1
    }
    // In the case of a single centered palindrome we will always do at least 1 iteration of our while loop. To control that in
    // the case that we did not have to we add 1 to left and subtract 1 from right to get us back on the same index.

    // In the case of a double centered palindrome, we would not even do 1 iteration if both letters are not the same. In this 
    // situation the left addition and right subtraction would actually make our indexes cross and give us a length of 0.
    // FOr example if ab with a = index 0 and b = index 1 where entered, a would become a = index 1 and b = index 0. This 
    // would give us a negative length which we account for by adding 1 to the returned length.

    // We also add the 1 because it is important to remember that subtracting indexes does not give us string length
    // since we need to account for the index of 0 we must add 1 more to get an accurate length
    left += 1
    right -= 1

    //here we return an array of 3 points, a length, a left index and a right index which would be used in our main function
    // and compared to one another throughout our iteration
    return [right - left + 1, left, right]
}

// Ex: "cbbc"
longestPalindrome("bba")
// longestPalindrome("abbc")
// longestPalindrome("racecar")
// longestPalindrome("babbac")
// longestPalindrome("attab")

// "bab" Length left 0, right 2    right - left + 1

// "baab"