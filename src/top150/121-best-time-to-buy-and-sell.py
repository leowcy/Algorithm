class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Too high time complexity - O(n^2)
        # res = 0

        # for x in range(len(prices)):
        #     for y in range(x):
        #         if prices[x] - prices[y] > 0:
        #             res = max(res, prices[x] - prices[y])

        # return res

        buy_price = prices[0]
        profit = 0

        for price in prices[1:]:
            if buy_price > price:
                buy_price = price
            
            profit = max(profit, price - buy_price)

        return profit