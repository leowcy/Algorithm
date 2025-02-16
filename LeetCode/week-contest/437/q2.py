# Not working. I think this should us DP for it. 
class Solution:
    def maxWeight(self, pizzas: list[int]) -> int:
        n = len(pizzas)
        days = n // 4
        pizzas.sort(reverse=True)
        ans = 0

        for day in range(1, days + 1):
            if day % 2 == 1:
                ans += pizzas[0]
                pizzas.pop(0)
            elif pizzas[1] == pizzas[2]:
                ans += pizzas[1]
                pizzas.pop(1)
                pizzas.pop(1)
            elif pizzas[1] != pizzas[2]:
                ans += pizzas[1]
                pizzas.pop(0)
                pizzas.pop(0)
            print(pizzas)

        return ans


s = Solution()
s.maxWeight([5, 3, 1, 1, 3, 3, 2, 1, 5, 4, 2, 1])

###
# 已知取3次
# [5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1]
# 第一次，取最大值，5， 剩下 [5, 4, 4, 3, 3, 3, 2, 2]
# 第二次，在剩下中，选择第二大的值，得到4，剩下 [4, 3, 3, 3] 或者 [5, 3, 3, 3]
# 第三次，剩下值中，在第二次选择，最好是剩下 [5, 3, 3, 3]，因此我们的得到5，否则只能得到4，所以第二次的选择，尤为重要。
# ###
