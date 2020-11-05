let longestPalindrome = (s) => {

    if (s.length < 1) {
        return " "
    }
    let maxLen = 0
    let start = 0
    let end = 0

    for (let i = 0; i < s.length; i++) {
        [length , left, right] = expandFromIndex(s, i, i)

        if (length > maxLen) {
            maxLen = length
            start = left
            end = right
        }

        [length , left, right] = expandFromIndex(s, i, i+1)

        if (length > maxLen) {
            maxLen = length
            start = left
            end = right
        }
    }
    console.log(s.slice(start, end + 1))
    return s.substr(start, end + 1)


}

let expandFromIndex = (s, left, right) => {

    if (s === null || right < left) {
        return 0
    }

    while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left -= 1
        right += 1
    }

    left += 1
    right -= 1

    return [right - left + 1, left, right]
}

// Ex: "cbbc"
longestPalindrome("bba")
longestPalindrome("abbc")
// longestPalindrome("racecar")
// longestPalindrome("babbac")
// longestPalindrome("attab")