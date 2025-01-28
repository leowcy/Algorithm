class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        start = inf

        for price in prices:
            start = min(start, price)
            ans = max(ans, price - start)

        return ans
