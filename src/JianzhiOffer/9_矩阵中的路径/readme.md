### 矩阵中的路径
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 
示例 1：
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true

示例 2：
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false

## solution:
- After reading the requirement of finding/searching a possible solution -> easily think of DFS.
- In the 2d array -> 4 direction will be all possible sub-solution. So dfs() recursion call for 4 solution.
- The end dfs() condition is that: out of scope of the array / the next char in the array not match / all chars in the target string have been checked
- A trick point is that for those verified char in the 2d array -> set it as some other char to prevent double checking
- Remember to add back the char which has been substituted after the dfs() recursion call
- Time Complexity: O(n) = (3^K)MN = M*N -> K is the length of target string. In dfs() recursion call, there are 4 different possible sub-solution. But one of it
    can be discarded since it is the previous char. So for dfs() recursion, time complexity is 3^K. -> M and N is the length of Row and Column. So in total
    is 3^K * MN -> O(n) = M*N
- Space Complexity: O(n) = K -> The depth of recursion call won't be larger than K. So the system will use at most stack space of O(K). The worst case is that K=MN.