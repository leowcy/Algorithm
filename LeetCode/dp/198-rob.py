# bottom to top - O(n), O(n)
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])

        dp = [0] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, n):
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])

        return dp[n - 1]


# dfs top to bottom - O(n), O(n)
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)

        @cache
        def dfs(x):
            if x < 0:
                return 0

            return max(dfs(x - 1), dfs(x - 2) + nums[x])

        return dfs(n - 1)


# bottom to top - O(n), O(1)
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])

        f0 = nums[0]
        f1 = max(f0, nums[1])

        for i in range(2, n):
            temp = max(f0 + nums[i], f1)
            f0 = f1
            f1 = temp

        return f1
