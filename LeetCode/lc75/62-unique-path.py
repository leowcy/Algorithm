# time exceeded. Top down solution
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        d = [(0, 1), (1, 0)]
        ans = 0

        def dfs(x, y):
            nonlocal ans
            if x == m - 1 and y == n - 1:
                ans += 1
                return

            for dx, dy in d:
                nx, ny = dx + x, dy + y
                if nx < m and ny < n:
                    dfs(nx, ny)

        dfs(0, 0)
        return ans


# AC with this dp solution. Still top down. Beat 8%
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:

        @cache
        def dfs(x, y):
            if x < 0 or y < 0:
                return 0

            if x == 0 and y == 0:
                return 1

            return dfs(x - 1, y) + dfs(x, y - 1)

        return dfs(m - 1, n - 1)


# Try bottom up - Beat 100%
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[0] * n for _ in range(m)]
        for each in dp:
            each[0] = 1

        for i in range(1, n):
            dp[0][i] = 1

        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

        return dp[m - 1][n - 1]


# Combination solution - In total m+n-2 steps, we choose m-1 step
# for going down. So it is a combination math problem that we position
# m-1 down step in the m+n-2 totally possible full steps.
# C(m+n-2, m-1)
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        return comb(m + n - 2, m - 1)
