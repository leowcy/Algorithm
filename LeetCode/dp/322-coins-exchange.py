class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        n = len(coins)

        @cache
        def dfs(i, c):
            if i < 0:
                return 0 if c == 0 else inf

            if coins[i] > c:
                return dfs(i - 1, c)
            else:
                return min(
                    dfs(i - 1, c),
                    dfs(i, c - coins[i]) + 1,
                )

        return dfs(n - 1, amount) if dfs(n - 1, amount) < inf else -1


# bottom to top
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        n = len(coins)
        f = [[inf] * (amount + 1) for _ in range(len(coins) + 1)]
        f[0][0] = 0

        for i, x in enumerate(coins):
            for c in range(amount + 1):
                if c < x:
                    f[i + 1][c] = f[i][c]
                else:
                    f[i + 1][c] = min(f[i][c], f[i + 1][c - x] + 1)

        ans = f[n][amount]
        return ans if ans < inf else -1
