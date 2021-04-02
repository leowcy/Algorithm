### 机器人的运动范围

地上有一个 m 行 n 列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于 k 的格子。例如，当 k 为 18 时，机器人能够进入方格 [35, 37] ，因为 3+5+3+7=18。但它不能进入方格 [35, 38]，因为 3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：
输入：m = 2, n = 3, k = 1
输出：3

示例 2：
输入：m = 3, n = 1, k = 0
输出：1

提示：
1 <= n,m <= 100
0 <= k <= 20

## solution 1:

- Similar to question No.9 -> Move up/down/left/right -> so easily think of using DFS/BFS. -> 此题做法为DFS
- 几个关键点：
  1. 位数和的计算 （写了两种方法在 main.js 中）
  2. 四周方向遍历（dfs() row +- 1 / column +- 1)
  3. 限制条件（不能越界 + 位数和大于K + 该格子未被检索过）
  4. 统计格子数（可以设定一个blockNumber， 更巧妙的是在3中，检索格子使用情况的时候会设置一个set，最终set的长度即为格子数）
- 评论区看到一个条有意思的评论：BFS：一般借助队列进行存储 DFS：一般借助递归进行计算
- 广度优先搜索算法（Breadth-First-Search，缩写为 BFS），是一种利用队列实现的搜索算法。简单来说，其搜索过程和 “湖面丢进一块石头激起层层涟漪” 类似。深度优先搜索算法（Depth-First-Search，缩写为 DFS），是一种利用递归实现的搜索算法。简单来说，其搜索过程和 “不撞南墙不回头” 类似。BFS 的重点在于队列，而 DFS 的重点在于递归。这是它们的本质区别。
- Time Complexity: O(n) = mn (row and column) -> The same block could be visit multiple times but it will only be a constant value. So c*mn = mn
- Space Complexity: O(n) = mn -> there is a set to check if the block has been verified or not -> the set will be m*n space
