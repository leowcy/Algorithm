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
- Time Complexity: O(n) = n -> Reason: We will need to for loop (n-1) - 2 + 1 times for each sections. So here is similar to n. In the calculate function,
  we will need to for loop n/m times for checking the average length for the remaining section. But n/m will be a constant value so we can ignore. O(n) = n\*k = n
- Space Complexity: O(n) = 1 -> No extra space needed.

## solution 2: (official solution - Pure Math)

- 尽可能将绳子以长度 3 等分为多段时，乘积最大。 (这里有数学推论，省略)
  切分规则：
  最优： 3 。把绳子尽可能切为多个长度为 3 的片段，留下的最后一段绳子的长度可能为 0,1,2 三种情况。
  次优： 2 。若最后一段绳子长度为 2 ；则保留，不再拆为 1+1 。
  最差： 1 。若最后一段绳子长度为 1 ；则应把一份 3 + 1 替换为 2 + 2，因为 2×2>3×1。
- Time Complexity: O(n) = 1 -> pure math
- Space Complexity:O(n) = 1
