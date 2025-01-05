/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    if (!nums || nums.length < 3) return false;

    let smallerArr = [nums[0]],
        biggerArr = [];

    // push smaller value to smallerArr
    for (let i = 1; i < nums.length; i++) {
        smallerArr.push(Math.min(nums[i], smallerArr[smallerArr.length - 1]));
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] > smallerArr[j]) {
            while (biggerArr.length > 0 && biggerArr[biggerArr.length - 1] <= smallerArr[j]) biggerArr.pop();
            if (biggerArr.length > 0 && biggerArr[biggerArr.length - 1] < nums[j]) return true;
            biggerArr.push(nums[j]);
        }

    }

    return false;
}