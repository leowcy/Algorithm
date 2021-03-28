### 剑指 Offer 03. 数组中重复的数字

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 

## solution 1:
- create a Map and check for the value while scanning
- Time complexity: O(n)
- Space complexity: O(n) -> Reason: creation such a Map which adds the space complexity

## solution 2:
- use the current array to do the swap. Put the element/number in the nums array to its original index ( `nums[index] == index` )
- After that -> when swapping but realize that the number has already in the right position -> Mean duplication -> return the index
- Time complexity: O(n)
- Space complexity: O(1) -> Reason: using the existing array -> No extra space needed