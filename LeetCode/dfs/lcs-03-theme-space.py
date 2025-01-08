class Solution:
    def largestArea(self, grid: List[str]) -> int:
        grid = [list(i) for i in grid]
        m = len(grid)
        n = len(grid[0])
        ans = 0

        def dfs(i, j, num):
            if (
                (i <= 0 or i >= m - 1 or j <= 0 or j >= n - 1) and grid[i][j] == num
            ) or grid[i][j] == "0":
                return -inf

            if grid[i][j] != num:
                return 0

            grid[i][j] = "6"
            return (
                1
                + dfs(i + 1, j, num)
                + dfs(i - 1, j, num)
                + dfs(i, j + 1, num)
                + dfs(i, j - 1, num)
            )

        for i in range(1, m - 1):
            for j in range(1, n - 1):
                if grid[i][j] != "0" and grid[i][j] != "6":
                    ans = max(ans, dfs(i, j, grid[i][j]))

        return ans
