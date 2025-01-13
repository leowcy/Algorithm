class Solution:
    def climbStairs(self, n: int) -> int:
        @cache
        def dfs(x):
            if x == 2:
                return 2
            if x == 1:
                return 1
            if x <= 0:
                return 0

            return dfs(x - 1) + dfs(x - 2)

        return dfs(n)


class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2

        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[n]
