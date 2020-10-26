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
    if(s.length < 2 || s === null) {
        return s.length;
    }
    let set = new Set()
    let left = 0
    let right = 0
    let max = 0
    
    while (right < s.length) {
        let currentChar = s.charAt(right)
        if (!set.has(currentChar)){
            set.add(currentChar)
            right++
            max = Math.max(max, right - left)
        } else {
            set.delete(s.charAt(left++))                          
        }
    }
    return max;
}