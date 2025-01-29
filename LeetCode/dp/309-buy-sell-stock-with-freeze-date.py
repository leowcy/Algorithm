class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)

        @cache
        def dfs(x, own_stock):
            if x < 0:
                return 0 if not own_stock else -inf

            if own_stock:
                return max(dfs(x - 1, own_stock), dfs(x - 2, not own_stock) - prices[x])

            return max(dfs(x - 1, own_stock), dfs(x - 1, not own_stock) + prices[x])

        return dfs(n - 1, False)
