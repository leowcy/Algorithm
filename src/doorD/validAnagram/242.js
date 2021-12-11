/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (!s || !t || s.length != t.length) return false;
    let isAnagram = true;
    let letterMap = new Map();
    for (const alph of s) {
        let times = letterMap.get(alph);
        if (letterMap.get(alph)) {
            letterMap.set(alph, times + 1);
        } else {
            letterMap.set(alph, 1);
        }
    }

    for (const letter of t) {
        let findAlph = letterMap.get(letter);
        if (!findAlph || findAlph < 0) {
            isAnagram = false;
            break;
        } else {
            letterMap.set(letter, findAlph - 1);
        }
    }

    return isAnagram;
};