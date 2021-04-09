### 数组中奇数在偶数前

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

示例：
输入：nums = [1,2,3,4]
输出：[1,3,2,4]
注：[3,1,2,4] 也是正确的答案之一。

## solution 1: fast+slow pointers
- Define two pointers. One is slow and the other is fast. For the fast one, keep moving it until its number is an odd number. For the slow
    pointers, only move it after swapping it with the fast pointer. When the fast pointer reaches the end, end the loop and return the array.
- Time Complexity: O(n) = n -> For the fast pointer to loop the array once.
- Space Complexity: O(n) = 1 -> no extra space needed

## solution 2: 第二种解法， 也是双指针，从两段开始
- 左指针寻找偶数，右指针寻找基数，然后交换。当左右指针相遇，结束循环。
- TC: O(n) = n
- SC: O(n) = 1