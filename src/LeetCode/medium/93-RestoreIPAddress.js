/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const len = s.length;
    if (len < 4 || len > 12) return [];

    let res = [],
        arr = [];

    helper(s, arr, res);

    return res;
};

var helper = function (s, arr, res) {
    if (arr.length == 4 && !s) {
        res.push([...arr].join('.'));
        return;
    }

    for (let i = 1; i < 4; i++) {
        if (s.length < i) continue;
        const str = s.slice(0, i);
        if ((str.length > 1 && str[0] == '0' || Number(str) > 255)) continue;
        arr.push(str);
        helper(s.slice(i), arr, res);
        arr.pop();
    }
}

restoreIpAddresses("25525511135");