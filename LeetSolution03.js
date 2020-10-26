//Given a string s, find the length of the longest substring without repeating characters.
// Example1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example4:
// Input: s = ""
// Output: 0

var lengthOfLongestSubstring = function(s) {
    //if the length of string is less than 2 or its null just return the length of string. "o", "w", will return 1.
    if(s.length < 2 || s === null) {
        return s.length;
    }
    //create a set which is a structure that holds unique information.
    let set = new Set()
    //left and right represent indexes, in this case we will use two pointers.
    let left = 0
    let right = 0
    //max will save the largest length of substring in memory
    let max = 0
    //iterate string using right pointer.
    while (right < s.length) {
        let currentChar = s.charAt(right)
        //if the char is not in the set, add it to the set, increment the right pointer and 
        // set max to the length of that substring.
        if (!set.has(currentChar)){
            set.add(currentChar)
            right++
            max = Math.max(max, right - left)
            // otherwise, we find a char that already exists in the set, so we delete the char at the left pointer in the set,
            // we increment left pointer by 1 and then repeat the loop, if that did not remove the repeated character,
            // then the loop will continue to delete the left most value in the set until the value at the right pointer
            // does not exist in the set.
        } else {
            set.delete(s.charAt(left++))                          
        }
    }
    return max;
}