/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    if (!s || s.length == 0 || k > s.length) return "";

    let kStack = [];

    for (let each of s) {
        if (kStack.length !== 0 && kStack[kStack.length - 1][0] == each) {
            kStack[kStack.length - 1][1]++;
            if (kStack[kStack.length - 1][1] == k) {
                kStack.pop();
            }
        } else {
            kStack.push([each, 1]);
        }
    }

    let res = [];

    for (let i = 0; i < kStack.length; i++) {
        res.push(kStack[i][0].repeat(kStack[i][1]));
    }

    return res.join("");
};

// O(n) = n time  - O(n) = n space