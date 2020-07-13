//Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
    //1.
    //sort the array first
    //output the kth largest number


    //2.
    //For loop the input array twice and mark the rank for the value in the array
    //One warning is that Kth Largest not the Kth unique. So need one more array to calculate-
    //->for the same value in the array.
    //Complexity is n^2
    let temp;
    let rank = 0;
    let rankOfNums = [];
    let calculateSame = [];
    let tempSame;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        temp = 1;
        tempSame = 0;
        for (let j = 0; j < length; j++) {
            if (i != j && nums[i] < nums[j]) {
                temp++;
            }
            if (i != j && nums[i] === nums[j]) {
                tempSame++;
            }
        }
        //rankOfNums[i]=temp;
        calculateSame.push(tempSame);
        rankOfNums.push(temp);
    }
    for (let m = 0; m < length; m++) {
        if (rankOfNums[m] === k || (k > rankOfNums[m] && k <= rankOfNums[m] + calculateSame[m])) {
            rank = m;
        }
    }
    return nums[rank]
};