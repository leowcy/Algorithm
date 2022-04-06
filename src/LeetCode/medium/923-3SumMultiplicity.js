/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {

    let numberTimesArr = new Array(101).fill(0),
        m = Math.ceil(target / 3),
        ans = 0;

    for (const each of arr) {
        numberTimesArr[each]++;
    }

    for (let k = Math.min(100, target); k >= m; k--) {
        let remain = target - k,
            n = Math.ceil(remain / 2);
        for (let j = Math.min(remain, k); j >= n; j--) {
            let i = remain - j,
                x = numberTimesArr[i],
                y = numberTimesArr[j],
                z = numberTimesArr[k],
                res = 0;

            if (i == k) {
                res = x * (x - 1) * (x - 2) / (3 * 2);
            } else if (i == j) {
                res = x * (x - 1) / 2 * z;
            } else if (j == k) {
                res = x * y * (y - 1) / 2;
            } else {
                res = x * y * z;
            }
            ans = (res + ans) % (1e9 + 7);
        }
    }

    return ans;
};

// O(n) = n^2