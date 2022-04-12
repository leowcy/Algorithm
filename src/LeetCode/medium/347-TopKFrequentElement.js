/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let numsMap = new Map(),
        res = [];

    for (const each of nums) {
        let temp = numsMap.get(each);
        if (temp) {
            numsMap.set(each, temp + 1);
        } else {
            numsMap.set(each, 1);
        }
    }

    numsMap = new Map([...numsMap.entries()].sort((a, b) => b[1] - a[1]));

    let index = 0;

    for (let key of numsMap.keys()) {
        if (index < k) {
            res.push(key);
            index++;
        } else {
            break;
        }

    }

    return res;
};