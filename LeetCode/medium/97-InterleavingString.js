/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1 == "" && s2 == "") return s3 == "" ? true : false;
    if (s1.length + s2.length !== s3.length) return false;

    let memo = new Map();

    var helper = function (i1, i2, i3, memo) {
        if (i3 == s3.length) {
            return true;
        }

        let c1 = s1[i1],
            c2 = s2[i2],
            c3 = s3[i3],
            memoKey = i1.toString() + "-" + i2.toString();

        if (memo.get(memoKey) != null) {
            return memo.get(memoKey);
        }

        let res = false;

        if (c3 == c1 && c3 == c2) {
            res = helper(i1 + 1, i2, i3 + 1, memo) || helper(i1, i2 + 1, i3 + 1, memo);
        } else if (c3 == c1) {
            res = helper(i1 + 1, i2, i3 + 1, memo);
        } else if (c3 == c2) {
            res = helper(i1, i2 + 1, i3 + 1, memo);
        }

        memo.set(memoKey, res);
        return res;
    }

    return helper(0, 0, 0, memo);
};

