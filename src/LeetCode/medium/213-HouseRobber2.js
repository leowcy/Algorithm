/**
 * @param {number[]} nums
 * @return {number}
 */

// bottom up solution DP
var rob = function (nums) {
    if (!nums || nums.length == 0) return 0;

    if (nums.length == 1) return nums[0];
    if (nums.lenght == 2 || nums.length == 3) return Math.max(nums[0], nums[1], nums[2]);

    let robMoneyFromIndexZero = [],
        robMoneyFromIndexOne = [];

    // init
    robMoneyFromIndexZero[0] = nums[0];
    robMoneyFromIndexZero[1] = Math.max(nums[0], nums[1]);
    robMoneyFromIndexOne[0] = 0;
    robMoneyFromIndexOne[1] = nums[1];

    for (let i = 2; i < nums.length; i++) {
        robMoneyFromIndexZero[i] = Math.max((nums[i] + robMoneyFromIndexZero[i - 2]), robMoneyFromIndexZero[i - 1]);
        robMoneyFromIndexOne[i] = Math.max((nums[i] + robMoneyFromIndexOne[i - 2]), robMoneyFromIndexOne[i - 1]);
    }

    return Math.max(robMoneyFromIndexZero[nums.length - 2], robMoneyFromIndexOne[nums.length - 1]);
};