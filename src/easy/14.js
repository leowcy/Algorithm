/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 1) {
        return ""
    }
    if (strs.length == 1) {
        return strs[0]
    }
    let res = [...strs[0]];
    let temp = [];
    let compareArr = [];
    for (let index = 1; index < strs.length; index++) {
        compareArr = strs[index].split('');
        temp = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i] === compareArr[i]) {
                temp.push(res[i])
            } else {
                break;
            }
        }  
        res = temp;
    }
    if (res.length == 0) {
            return "";
    }
    return res.join('');
};
