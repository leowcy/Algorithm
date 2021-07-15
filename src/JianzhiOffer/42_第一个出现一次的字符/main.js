/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {

    let charMap = new Map();

    const n = s.length;

    for (let [i, ch] of Array.from(s).entries()) {
        if (charMap.has(ch)) {
            charMap.set(ch, -1);
        } else {
            charMap.set(ch, i);
        }
    }

    let first = n;

    for (let pos of charMap.values()) {
        if (pos !== -1 && pos < first) {
            first = pos;
        }
    }

    return first == n ? ' ' : s[first];
};