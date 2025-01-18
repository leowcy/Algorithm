### 连续子数组的最大和
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

示例1:
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

## solution1: DP
- Record the max of previous element sum and compare with Math.max(cur, cur + pre)
- Push each position's max value into an array
- return Math.max(...arr)
- TC: O(n) = N
- SC: O(n) = N

## solution2: DP
- Similar algorithm but without maintaining an extra array
- Two variables -> one is Pre the other is Max
- While each loop -> calculate the Math.max(Pre, Max) to keep track of the max value
- TC: O(n) = N
- SC: O(n) = 1