### 数组中出现次数超过一半的数字

## 题目

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例  1:
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2

限制：
1 <= 数组长度 <= 50000

## solution 1:

- Add a hashMap for store each step's value. For loop the array, if found any number's occurrence time more than half of the array, return the number back.
- TC: O(n) = n - Worst case is to for loop the whole array
- SC: O(n) = n - We will need to use a HashMap to store the value of each number occurrence times.

## 大神解法

- 本题常见的三种解法：

- 哈希表统计法： 遍历数组 nums ，用 HashMap 统计各数字的数量，即可找出 众数 。此方法时间和空间复杂度均为 O(N)O(N) 。
- 数组排序法： 将数组 nums 排序，数组中点的元素 一定为众数。
- 摩尔投票法： 核心理念为 票数正负抵消 。此方法时间和空间复杂度分别为 O(N)O(N) 和 O(1)O(1) ，为本题的最佳解法。
