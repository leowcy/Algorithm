class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)

        @cache
        def dfs(x, k, own_stock):
            if k < 0:
                return -inf
            if x < 0:
                return 0 if not own_stock else -inf

            if own_stock:
                return max(
                    dfs(x - 1, k, own_stock),
                    dfs(x - 1, k - 1, not own_stock) - prices[x],
                )
            return max(
                dfs(x - 1, k, own_stock), dfs(x - 1, k, not own_stock) + prices[x] # k not minus one here是因为我们写在了买的时候-1，所以卖就不减。也可以写在卖的时候减一，那么15行就不减了，也通过。
            )

        return dfs(n - 1, k, False)
