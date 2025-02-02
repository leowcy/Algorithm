class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        ans = 0

        for j in range(n):
            cur = grid[0][j]
            for i in range(1, m):
                if grid[i][j] <= cur:
                    ans += cur + 1 - grid[i][j]
                cur = max(grid[i][j], cur + 1)

        return ans
