// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output:
// "apple"

//题目描述：删除 s 中的一些字符，使得它构成字符串列表 d 中的一个字符串，找出能构成的最长字符串。如果有多个相同长度的结果，返回字典序的最小字符串。

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
    if (!s || s === "") return ""
    if (!d || d.length === 0) return "";
    let i = 0;
    let result = "";
    while (i < d.length) {
        if (isSub(s, d[i])) {
            if (d[i].length > result.split('').length) {
                result = d[i];
            } else if (result != "" && d[i].length === result.split('').length) {
                if (isLexicoBigger(result, d[i])) {
                    result = d[i]
                }
            }
        }
        i++;
    }
    console.log("result: ", result)
    return result;
};

//decide whether it is the sub string of word
function isSub(word, s) {
    let i = 0, j = 0;
    const wordCharArr = word.split('');
    const sCharArr = s.split('');
    while (i < wordCharArr.length && j < sCharArr.length) {
        if (wordCharArr[i] == sCharArr[j]) {
            j++;
        }
        // 这里容易有逻辑错误。不管怎么样，i都一直要++，注意。
        i++;
    }
    if (j === sCharArr.length) {
        return true;
    }
    return false;
}

function isLexicoBigger(word, s) {
    if (word === s) return true;
    const wordCharArr = word.split('');
    const sCharArr = s.split('');
    for (let i = 0; i < wordCharArr.length; i++) {
        if (wordCharArr[i].charCodeAt() > sCharArr[i].charCodeAt()) {
            return true;
        } else if (wordCharArr[i].charCodeAt() === sCharArr[i].charCodeAt()) {
            i++;
        } else {
            return false;
        }
    }
}

findLongestWord("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]);