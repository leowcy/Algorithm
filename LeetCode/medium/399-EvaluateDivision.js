/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    if (!equations || equations.length == 0 || !queries || queries.length == 0) return [];

    let divideMap = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [k1, k2] = equations[i];
        const factor = values[i];
        let curK1 = divideMap.get(k1),
            curK2 = divideMap.get(k2);
        if (!curK1) divideMap.set(k1, []);
        if (!curK2) divideMap.set(k2, []);
        divideMap.get(k1).push([k2, factor]);
        divideMap.get(k2).push([k1, 1 / factor]);
    }

    let res = [];

    for (const each of queries) {
        res.push(helper(each, divideMap, new Set()));
    }

    return res;
};

// bfs
var helper = function (query, divideMap, visited) {
    const [k1, k2] = query;
    if (!divideMap.has(k1) || !divideMap.has(k2)) return -1;

    const queue = [[k1, 1]];
    visited.add(k1);
    while (queue.length > 0) {
        const [key, curRes] = queue.shift();
        for (let [n, factor] of divideMap.get(key)) {
            if (n == k2) return factor * curRes;
            if (!visited.has(n)) {
                queue.push([n, curRes * factor]);
                visited.add(n);
            }
        }
    }

    return -1;
}