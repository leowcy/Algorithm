/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Leetcode原题是无序数组
// use Hashmap to solve this because 
// "reduce the look up time from O(n)O(n) to O(1)O(1) by trading space for speed"
var twoSum = function(nums, target) {
    if (nums == null) return null;
    let res = [];
    let myMap = new Map();
    //set map value
    for (let i = 0; i<nums.length; i++){
        myMap.set(nums[i], i)
    }
    //find the value
    for (let i = 0; i<nums.length; i++){
        let j = target - nums[i];
        if (myMap.has(j) && myMap.get(j) != i){
            res.push(i, myMap.get(j))
            return res;
        }
    }
};

// In JS, we can use array.findIndex to find the value. 注意： 这个方法只返回数组中第一个找到的数字。所以需要剔除重复的数字。
// 所以这个方法有一些弊端，一些条件无法满足。ex: [3,3]
var twoSum = function(nums, target) {
    if (nums == null) return null;
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        // declare the variable J is the number we need to find in the rest of the array
        const j = target - nums[i];
        const found = nums.findIndex(element => element == j)
        if (found != -1 && found != i)
            res.push(i, found)
            return res;
    }
};

// Solution for ranged Array有序数组
var twoSum = function(nums, target) {
    if (nums == null) return null;
    var i = 0, j = nums.length -1;
    let res = [];
    while (i<j) {
        let sum = nums[i] + nums[j];
        if (sum == target) {
            res.push(i, j)
            return res;
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return null;
};