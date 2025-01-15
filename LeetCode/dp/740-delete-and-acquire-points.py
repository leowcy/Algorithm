# loop range from number 1 to max(nums) and use Counter to represent 0 in the middle
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        nums.sort()
        nums = list(set(nums))
        n = nums[-1]
        dp = [0, cnt[1]]
        for i in range(2, n + 1):
            temp = max(dp[1], i * cnt[i] + dp[0])
            dp[0] = dp[1]
            dp[1] = temp

        return dp[1]


# Solution 2: Top to bottom
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        cnt = Counter(nums)

        @cache
        def dfs(x):
            if x < 0:
                return 0
            return max(dfs(x - 1), dfs(x - 2) + x * cnt[x])

        return dfs(max(nums))
