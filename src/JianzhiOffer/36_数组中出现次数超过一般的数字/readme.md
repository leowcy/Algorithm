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

