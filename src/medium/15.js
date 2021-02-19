/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
    if (nums.length === 0 || (nums.length === 1 && nums[0] === 0)) return [];

    let res = [];
    // sort it first - O(NlogN) sort operation
    const sortedNums = nums.sort((a, b) => a - b);
    let previous = null;

    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (sortedNums[i] > 0) {
            break;
        } else if (sortedNums[i] === 0) {
            if (i + 2 < sortedNums.length && sortedNums[i + 1] === 0 && sortedNums[i + 2] === 0) {
                res.push([sortedNums[i], sortedNums[i + 1], sortedNums[i + 2]]);
                break;
            } else {
                break;
            }
        } else {
            // element less than 0
            if (sortedNums[i] !== previous) {
                previous = sortedNums[i];
                let j = i + 1,
                    k = sortedNums.length - 1;
                while (j < k) {
                    if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
                        res.push([sortedNums[i], sortedNums[j], sortedNums[k]]);

                        while(sortedNums[j] === sortedNums[j+1]) j++;
                        while(sortedNums[k-1] === sortedNums[k]) k--;

                        j++;
                        k--
                    } else if (sortedNums[i] + sortedNums[j] + sortedNums[k] > 0) {
                        k--;
                    } else
                        j++;
                }
            }
            // do nothing if the next number is the same as previous one
        }
    }

    return res;
};

// O(n^2)