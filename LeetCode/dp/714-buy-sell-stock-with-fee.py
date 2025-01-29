class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n = len(prices)

        @cache
        def dfs(x, own_stock):
            if x < 0:
                return 0 if not own_stock else -inf

            if own_stock:
                return max(dfs(x - 1, own_stock), dfs(x - 1, not own_stock) - prices[x])

            return max(
                dfs(x - 1, own_stock), dfs(x - 1, not own_stock) + prices[x] - fee # Or we can deduct fee on line 11
            )

        return dfs(n - 1, False)
