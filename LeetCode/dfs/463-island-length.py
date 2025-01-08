class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        d = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        ans = 0

        def dfs(i, j):
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
                return 1

            if grid[i][j] == 2:
                return 0
            grid[i][j] = 2
            temp = 0
            for di, dj in d:
                ni, nj = i + di, j + dj
                temp += dfs(ni, nj)
            return temp

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    ans += dfs(i, j)

        return ans
