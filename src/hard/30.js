/**
 * 30. Substring with Concatenation of All Words
 * You are given a string s and an array of strings words of the same length.
 * Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once,
 * in any order, and without any intervening characters.
You can return the answer in any order.

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let res = [];

    const eachWordLength = words[0].length;
    const wordsArrayLength = words.length;
    const targetStringLength = eachWordLength * wordsArrayLength;

    // create map for words to compare with the target string later
    let wordsMap = new Map();
    words.forEach(word => {
        let currentValue = 0;
        if (wordsMap.get(word)) currentValue = wordsMap.get(word);
        wordsMap.set(word, 1 + currentValue);
    });

    // for loop the s and set it end at the place before the last index by targetStringLength
    for (let i = 0; i < s.length - targetStringLength + 1; i++) {
        let subString = s.substring(i, i + targetStringLength);
        // if qualify -> push the index of i to record it.
        if (isQualify(subString, wordsMap, eachWordLength)) res.push(i);
    }

    return res;
};

var isQualify = function (s, targetWordsMap, eachWordLength) {
    // create a result flag
    let isQualifyFlag = true;
    // create a map for the words in the substring
    let subStringWordMap = new Map();

    // for loop the substring and increase it by eachWordLength
    for (let i = 0; i < s.length; i += eachWordLength) {
        let eachWordInSubString = s.substring(i, i + eachWordLength);
        let currentValue = 0;
        if (subStringWordMap.get(eachWordInSubString)) currentValue = subStringWordMap.get(eachWordInSubString);
        subStringWordMap.set(eachWordInSubString, 1 + currentValue);
    }

    // compare the subStringWordMap and the targetWordsMap
    targetWordsMap.forEach((_, key) => {
        if (targetWordsMap.get(key) !== subStringWordMap.get(key)) isQualifyFlag = false;
    });

    return isQualifyFlag;
}