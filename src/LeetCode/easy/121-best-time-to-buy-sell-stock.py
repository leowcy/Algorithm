class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0

        # if found a lower price, mark the previous profit. Then find another
        # potential profit until find another lower price.
        lowest = prices[0]
        for i in range(1, len(prices)):
            if prices[i] >= lowest:
                max_profit = max(max_profit, prices[i] - lowest)
            else:
                lowest = prices[i]

        return max_profit