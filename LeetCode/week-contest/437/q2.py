class Solution:
    def maxWeight(self, pizzas: list[int]) -> int:
        # 次数
        n = len(pizzas)
        days = n // 4

        # 排序
        pizzas.sort(reverse=True)
        ans = 0

        # 先选奇数天
        odd_days = (days+1) // 2
        ans += sum(pizzas[:odd_days])
        
        # 后选偶数天，隔一天选一个
        even_days = days - odd_days
        for i in range(even_days):
            ans += pizzas[odd_days + i * 2 + 1]

        return ans


s = Solution()
print(s.maxWeight([5, 3, 1, 1, 3, 3, 2, 1, 5, 4, 2, 1]))

###
# 已知取3次
# [5, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1]
# 第一次，取最大值，5， 剩下 [5, 4, 4, 3, 3, 3, 2, 2]
# 第二次，在剩下中，选择第二大的值，得到4，剩下 [4, 3, 3, 3] 或者 [5, 3, 3, 3]
# 第三次，剩下值中，在第二次选择，最好是剩下 [5, 3, 3, 3]，因此我们的得到5，否则只能得到4，所以第二次的选择，尤为重要。
#
# 总结，先把奇数天都取了最大值，然后隔一个去一个次大值作为偶数天，即为 奇寄_偶_偶 ###
