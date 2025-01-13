class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)

        @cache
        def dfs(x):
            if x <= 1:
                return 0

            return min(dfs(x - 1) + cost[x - 1], dfs(x - 2) + cost[x - 2])

        return dfs(n)


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        if n == 1:
            return cost[0]
        if n == 2:
            return min(cost)

        dp = [0] * (n + 1)
        for i in range(2, n + 1):
            dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])

        return dp[n]
