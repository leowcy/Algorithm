/**
 * 3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 * Example One:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//     let max = 0,
//         initStr = "",
//         index;

//     if (!s || s === "") return 0;
//     for (let i = 0; i < s.length; i++) {
//         console.log(index)
//         index = initStr.indexOf(s[i]);
//         // if new char found in the initString
//         if (index > -1) {
//             initStr = initStr.substring(index+1);
//         }
//         initStr += s[i];
//         max = Math.max(max, initStr.length);
//     }
//     return max;
// };

// Sliding window
var lengthOfLongestSubstring = function(s) {
    if (!s || s.length === 0) return 0;
    let max = 0,
        windowStart = 0;

    let window = new Map();
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        //if found the char into the Map
        if (window.has(s[windowEnd])) {
            windowStart = Math.max(windowStart, window.get(s[windowEnd]) + 1)
        }
        //if not found, add into the window
        window.set(s[windowEnd], windowEnd);
        // compare the max
        max = Math.max(max, windowEnd - windowStart + 1);
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));