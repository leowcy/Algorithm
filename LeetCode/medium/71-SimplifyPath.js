/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    if (!path || path.length == 0) return "/";

    let splitBySlash = path.split("/"),
        res = [];

    for (let i = 0; i < splitBySlash.length; i++) {
        if (splitBySlash[i] == "." || splitBySlash[i] == "") continue;
        if (splitBySlash[i] == "..") {
            res.pop();
        } else {
            res.push(splitBySlash[i]);
        }
    }

    return "/" + res.join("/");
};