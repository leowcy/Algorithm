# Beat 100%
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0

        for i in range(1, len(prices)):
            ans += max(prices[i] - prices[i - 1], 0)

        return ans


# dp solution
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)

        @cache
        def dfs(x, own_stock):

            if x == -1:
                if own_stock:
                    return -inf
                else:
                    return 0

            if own_stock:
                return max(dfs(x - 1, own_stock), dfs(x - 1, False) - prices[x])
            return max(dfs(x - 1, own_stock), dfs(x - 1, True) + prices[x])

        return dfs(n - 1, False)
