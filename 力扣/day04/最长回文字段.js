var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    let start = 0
    let maxLen = 1

    for (let i = 0; i < s.length; i++) {
        a(i, i)
        a(i, i + 1)
    }

    function a(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {

            let len = right - left + 1

            if (len > maxLen) {
                maxLen = len
                start = left
            }

            left--
            right++

        }
    }

    return s.substring(start, start + maxLen)

};

console.log(longestPalindrome('babad'));


