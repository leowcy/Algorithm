/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    if (!s || !t) return false;

    let sArr = helper(s),
        tArr = helper(t);

    return sArr == tArr ? true : false;
};

var helper = function (input) {

    let res = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "#") {
            res.pop();
        } else {
            res.push(input[i]);
        }
    }

    return res.join('');
}

// O(n) = n