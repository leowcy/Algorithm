# 这是我的答案，当然了，错的。我的思路是不种或者种满的递归，然后循环下去，对比最大值。但是存在一种情况，就是
# 我们不需要种满，在可新种花的数量有限时，我们可以提高最小值的最大值，平均提高，才能得到最优解。
# 所以这题的做法是贪心+排序。
class Solution:
    def maximumBeauty(
        self, flowers: List[int], newFlowers: int, target: int, full: int, partial: int
    ) -> int:
        n = len(flowers)

        @cache
        def dfs(idx, f, mn):
            if idx < 0:
                if f < 0:
                    return -inf
                if mn < inf:
                    return mn * partial
                return 0

            cur = flowers[idx]
            if cur >= target:
                # nothing we can do, already full
                return dfs(idx - 1, f, mn) + full

            return max(
                dfs(idx - 1, f, min(mn, cur)),
                dfs(idx - 1, f - (target - cur), mn) + full,
            )

        return dfs(n - 1, newFlowers, inf)


# LingGod solution
class Solution:
    def maximumBeauty(self, flowers: List[int], newFlowers: int, target: int, full: int, partial: int) -> int:
        n = len(flowers)
        for i in range(n):
            flowers[i] = min(flowers[i], target)

        # 如果全部种满，还剩下多少朵花？
        left_flowers = newFlowers - (target * n - sum(flowers))

        # 没有种花，所有花园都已种满
        if left_flowers == newFlowers:
            return n * full  # 答案只能是 n*full（注意不能减少花的数量）

        # 可以全部种满
        if left_flowers >= 0:
            # 两种策略取最大值：留一个花园种 target-1 朵花，其余种满；或者，全部种满
            return max((target - 1) * partial + (n - 1) * full, n * full)

        flowers.sort()  # 时间复杂度的瓶颈在这，尽量写在后面

        ans = pre_sum = j = 0
        # 枚举 i，表示后缀 [i, n-1] 种满（i=0 的情况上面已讨论）
        for i in range(1, n + 1):
            # 撤销，flowers[i-1] 不变成 target
            left_flowers += target - flowers[i - 1]
            if left_flowers < 0:  # 花不能为负数，需要继续撤销
                continue

            # 满足以下条件说明 [0, j] 都可以种 flowers[j] 朵花
            while j < i and flowers[j] * j <= pre_sum + left_flowers:
                pre_sum += flowers[j]
                j += 1

            # 计算总美丽值
            # 在前缀 [0, j-1] 中均匀种花，这样最小值最大
            avg = (left_flowers + pre_sum) // j  # 由于上面特判了，这里 avg 一定小于 target
            total_beauty = avg * partial + (n - i) * full
            ans = max(ans, total_beauty)

        return ans