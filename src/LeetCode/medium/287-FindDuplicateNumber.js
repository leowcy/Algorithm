/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    let tortoise = nums[0];
    let hare = nums[0];

    tortoise = nums[tortoise];
    hare = nums[nums[hare]];

    // 1st time run - tortoise 1 step each and hare 2 steps each
    while (tortoise != hare) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    }

    // move tortoise back to start point
    tortoise = nums[0];

    // 2nd run - both tortoise and hare 1 step each time
    while (tortoise != hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return tortoise;
};

// O(n) = n
// Floyd's Tortoise and hare - Also named as cycle detection