var lengthOfLongestSubstring = function (s) {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let arr = []
        let arr_lenth=0

        for (let j = i; j < s.length; j++) {
            if (arr.includes(s[j])){
                break
            }

            arr.push(s[j])
            arr_lenth+=1
        }

        if(arr_lenth >max){
            max =arr_lenth
        }
    }
    return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))



