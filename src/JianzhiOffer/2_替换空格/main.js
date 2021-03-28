/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    if (!s || s.length == 0) return "";

    s = s.replace(/ /g, "%20")

    return s;
};

replaceSpace("we are happy")