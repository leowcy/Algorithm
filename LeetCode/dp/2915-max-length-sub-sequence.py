class Solution:
    def lengthOfLongestSubsequence(self, nums: List[int], target: int) -> int:
        n = len(nums)

        @cache
        def dfs(i, c):
            if i < 0:
                return 0 if c == 0 else -inf

            if c < nums[i]:
                return dfs(i - 1, c)
            else:
                return max(dfs(i - 1, c), dfs(i - 1, c - nums[i]) + 1)

        return dfs(n - 1, target) if dfs(n - 1, target) > -inf else -1
