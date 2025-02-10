class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)

        @cache
        def dfs(x, times, owned):
            if times < 0:
                return -inf
            if x < 0:
                if owned:
                    return -inf
                else:
                    return 0

            if owned:
                return max(
                    dfs(x - 1, times, True), dfs(x - 1, times - 1, False) - prices[x]
                )
            return max(dfs(x - 1, times, False), dfs(x - 1, times, True) + prices[x])

        return dfs(n - 1, 2, False)


# bottom up
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        f = [[-inf] * 2 for _ in range(2 + 2)]
        for j in range(1, 2 + 2):
            f[j][0] = 0
        for p in prices:
            for j in range(2 + 1, 0, -1):
                f[j][0] = max(f[j][0], f[j][1] + p)
                f[j][1] = max(f[j][1], f[j - 1][0] - p)
        return f[-1][0]


# 2nd time
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)

        @cache
        def dfs(x: int, k: int, hold_stock: bool) -> int:
            if k < 0:
                return -inf
            if x < 0:
                return -inf if hold_stock else 0

            if hold_stock:
                return max(
                    dfs(x - 1, k - 1, False) - prices[x],  # buy do k-1
                    dfs(x - 1, k, True),
                )
            return max(dfs(x - 1, k, True) + prices[x], dfs(x - 1, k, False))

        return dfs(n - 1, 2, False)
