class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        if n == 1:
            return 0

        ans = 0
        temp = prices[0]
        for i in range(1, n):
            if prices[i] < temp:
                temp = prices[i]
            else:
                ans = max(ans, prices[i] - temp)

        return ans


# Similar concept but different style
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)

        ans = 0
        temp = prices[0]
        for each in prices:
            temp = min(temp, each)
            ans = max(ans, each - temp)

        return ans
