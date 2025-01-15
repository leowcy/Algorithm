class Solution:
    def countHousePlacements(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 2
        for i in range(2, n + 1):
            dp[i] = (dp[i - 1] + dp[i - 2]) % (10**9 + 7)
        return dp[-1] * dp[-1] % (10**9 + 7)
