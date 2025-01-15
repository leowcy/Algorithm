# If using maximum number to loop, will time out here. So this is not a AC solution.
# class Solution:
#     def maximumTotalDamage(self, power: List[int]) -> int:
#         cnt = Counter(power)
#         p = sorted(cnt)
#         n = len(p)
#         if p[-1] == 1:
#             return cnt[p[-1]]

#         f0, f1 = 0, cnt[1]
#         f2 = max(f1, 2 * cnt[2])

#         for i in range(3, p[-1] + 1):
#             f0, f1, f2 = f1, f2, max(f0 + cnt[i] * i, f2)

#         return f2


# Solution: O(n*logn), O(n)
class Solution:
    def maximumTotalDamage(self, power: list[int]) -> int:
        import collections

        cnt = collections.Counter(power)
        power = sorted(cnt)
        n = len(power)
        dp = [0] * (n + 1)
        j = 0
        for i, x in enumerate(power):
            print(f"i: {i}, x: {x}")
            print(f"power[j]: {power[j]}")
            while power[j] < x - 2:
                j += 1
                print(j)
            print(f"dp[i]: {dp[i]}, dp[j]: {dp[j]}")
            dp[i + 1] = max(dp[i], dp[j] + x * cnt[x])
            print(dp)
        return dp[-1]


s = Solution()
s.maximumTotalDamage([1,4,4,5,10])
