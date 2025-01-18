/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p == '.*' || !s && !p) return true;

    return dp(s, 0, p, 0);
};

var dp = (str1, index1, str2, index2) => {
    // define the end condition first
    if (index1 == str1.length && index2 == str2.length) {
        return true;
    }
    // if the index1 move over str1 length
    if (index1 > str1.length) {
        return false;
    }

    // compare the index1 and index2
    if (str1[index1] == str2[index2] || str2[index2] == '.') {
        // current digit is the same
        if (str2[index2 + 1] && str2[index2 + 1] == '*') {
            // either case of 'aa' and 'a*' || 'aaa' and 'a*a'
            return dp(str1, index1 + 1, str2, index2) || dp(str1, index1, str2, index2 + 2)
        } else {
            // 'ab' and 'ab'
            return dp(str1, index1 + 1, str2, index2 + 1)
        }
    } else {
        // str2[index2] is a letter from a-z
        if (str2[index2 + 1] && str2[index2 + 1] == '*') {
            // 'b' and 'a*b'
            return dp(str1, index1, str2, index2 + 2);
        } else {
            // 'b' and 'ab' -> return false
            return false;
        }
    }
}