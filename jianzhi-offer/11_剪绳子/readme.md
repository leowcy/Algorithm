### 剪绳子

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n 都是整数，n>1 并且 m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]_k[1]_...\*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18。

示例 1：
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1

示例  2:
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

## solution 1:

- First we don't know how many sections we will need to cut the rope into to make the result largest. So we will need to for loop the cases.
  So the range of section will be [2, n-1] -> The reason chosen n-1 is that when we cut the rope into n sections, the result will be only 1.
  So from [2, n-1] will be better.
- Secondly, how to know the max product when cut the rope into m sections. Usually when we will use the average value to get the product and we will
  get the maximum product. So base on this math logic -> we will keep calculating the average value and use it to get the product.
- Time Complexity: O(n) = n^2 -> Reason: We will need to for loop (n-1) - 2 + 1 times for each sections. So here is similar to n. In the calculate function,
  we will need to for loop n/m times for checking the average length for the remaining section. if n == m, we will need n times as well. So, O(n) = n*n = n^2
- Space Complexity: O(n) = 1 -> No extra space needed.

## solution 2: (official solution - Pure Math - 贪婪算法 - greedy algorithm)
- greedy algorithm will need the math to prove it correct.
- 尽可能将绳子以长度 3 等分为多段时，乘积最大。 (这里有数学推论，省略)
  切分规则：
  最优： 3 。把绳子尽可能切为多个长度为 3 的片段，留下的最后一段绳子的长度可能为 0,1,2 三种情况。
  次优： 2 。若最后一段绳子长度为 2 ；则保留，不再拆为 1+1 。
  最差： 1 。若最后一段绳子长度为 1 ；则应把一份 3 + 1 替换为 2 + 2，因为 2×2>3×1。
- Time Complexity: O(n) = 1 -> pure math
- Space Complexity:O(n) = 1

## solution 3: dynamic programming
- 核心思路就是为了整体的最优，那么每一个细分的子问题也应该为最优。当把长度为n的绳子进行m段的划分，不管是分为[1, m]段，都应该有其最优解。
    按照这个思路，我们计算出当把绳子分为[1,m]段的每一个子问题的最优解，然后选取其中的最大值即可。这就是动态规划的核心思想。
- 如果面试题是一个求问题的最优解（通常最大值最小值），并且子问题还有重叠的更小的子问题，考虑动态规划。
- DP四大特点：
    1. 求出问题的最优解（最大或最小）
    2. 整体问题的最优依赖各个子问题的最优解。
    3. 大问题分解成若干的小问题，而且小问题之间还有互相重叠的更小的子问题。
    4. 从上往下分析问题，从下往上解决问题。用dp解决问题的时候，我们通常从解决最小的问题开始，并把已经解决的子问题的最优解存储下来，并把子问题的
        最优解组合起来逐步解决大问题。
- TC: O(n) = n^2
- SC: O(n) = 1