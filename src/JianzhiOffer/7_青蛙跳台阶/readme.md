### 青蛙跳台阶问题

一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级台阶。求该青蛙跳上一个 n  级的台阶总共有多少种跳法。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

## solution:

- Analysis the question and you will find out this rule:
  s(n) = s(n-1) and jump 1 stair + s(n-2) + jump 2 stairs = s(n-1) + s(n-2)
  Then we realize that this puzzle is the same as 6_Fibonacci. Easy. Same solution.
- Time Complexity: O(n) = n
- Space Complexity: O(n) = 1
