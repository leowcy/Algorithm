class Solution:
    def zigzagTraversal(self, grid: List[List[int]]) -> List[int]:
        m = len(grid)
        n = len(grid[0])
        flag = False
        ans = []

        for i in range(m):
            is_odd_layer = i % 2
            for j in range(n):
                if is_odd_layer:
                    if not flag:
                        ans.append(grid[i][n - j - 1])
                else:
                    if not flag:
                        ans.append(grid[i][j])
                flag = not flag

        return ans
