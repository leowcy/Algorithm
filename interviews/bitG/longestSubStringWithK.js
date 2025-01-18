// Find the longest substring with k unique characters in a given string

/*
Given a string you need to print longest possible substring that has exactly M unique characters.
If there are more than one substring of longest possible length, then print any one of them.

"aabbcc", k = 1
Max substring can be any one from {"aa" , "bb" , "cc"}.

"aabbcc", k = 2
Max substring can be any one from {"aabb" , "bbcc"}.

"aabbcc", k = 3
There are substrings with exactly 3 unique characters
{"aabbcc" , "abbcc" , "aabbc" , "abbc" }
Max is "aabbcc" with length 6.

"aaabbb", k = 3
There are only two unique characters, thus show error message. 
*/

/**
* @param {string} s
* @param {number} k
* @return {number}
*/
var lengthOfLongestSubstringKDistinct = function (s, k) {

    if (s.length <= k) return s.length;
    let hMap = {},
        max = 0;

    for (let left = 0, right = 0; right < s.length; right++) {

        hMap[s[right]] = (hMap[s[right]] || 0) + 1

        while (Object.keys(hMap).length > k) {
            // more than k distinct character
            if (hMap[s[left]] === 1) {
                delete hMap[s[left]];
            } else {
                hMap[s[left]]--;
            }
            left++;
        }

        max = Math.max(max, right - left + 1);

    }

    return max;

    // const uniqueChar = k;
    // const len = s.length;

    // if (len < uniqueChar + 1) return len;

    // let hMap = {};
    // let max = 0;

    // for (let right = 0, left = 0; right < len; right++) {

    //     // add vaule to the hMap
    //     hMap[s[right]] = (hMap[s[right]] || 0) + 1;

    //     /**
    //         map size should be equal to k.
    //         If not keep removing keys and increment value of left pointer
    //     **/

    //     while(Object.keys(hMap).length > uniqueChar) {
    //         // move left pointer
    //         if (--hMap[s[left]] === 0) {
    //             delete hMap[s[left]];
    //         }
    //         left++;
    //     }

    //     max = Math.max(max, (right - left + 1));
    // }

    // return max;
};

// TC: O(n) = n
// SC: O(n) = n -> the sliding window