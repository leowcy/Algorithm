class Solution:
    def numberOfRightTriangles(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])
        ans = 0

        row = [0 for _ in range(n)]
        column = [0 for _ in range(m)]

        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1:
                    row[i] += 1
                    column[j] += 1

        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1 and row[i] > 1 and column[j] > 1: # calculate each row and column
                    ans += (row[i] - 1) * (column[j] - 1)

        return ans
