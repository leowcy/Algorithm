### 斐波那契数列
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

## solution 1:
- Save each step value -> sum = f0 + f1, which means sum now is f2. Store this value and continue the add function. Substitute f0 with f1, f1 to sum(f2) -> then sum = f1 + f2.
- Time Complexity: O(n)
- Space Complexity: O(1) -> no extra space needed

## solution 2:
- Recursion -> But this function will timeout since the computation will take too long. Not recommended.