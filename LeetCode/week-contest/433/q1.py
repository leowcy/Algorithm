class Solution:
    def subarraySum(self, nums: List[int]) -> int:
        ans = 0
        for i, val in enumerate(nums):
            start = max(0, i - nums[i])
            ans += sum(nums[start : i + 1])

        return ans


class Solution:
    def subarraySum(self, nums: List[int]) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)

        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]

        ans = 0
        for i, val in enumerate(nums):
            start = max(0, i - val)
            ans += prefix[i + 1] - prefix[start]

        return ans
