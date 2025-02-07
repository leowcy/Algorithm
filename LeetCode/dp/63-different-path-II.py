class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])

        @cache
        def dfs(x, y):
            if x < 0 or y < 0 or obstacleGrid[x][y] == 1:
                return 0

            if x == 0 and y == 0:
                return 1

            return dfs(x - 1, y) + dfs(x, y - 1)

        return dfs(m - 1, n - 1)
