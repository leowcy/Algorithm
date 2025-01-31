class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        n = len(nums)
        suffix_min = [0] * n
        suffix_min[-1] = nums[-1]
        for i in range(n - 2, -1, -1):
            suffix_min[i] = min(suffix_min[i + 1], nums[i])

        ans = inf
        for j in range(1, n - 1):
            ans = min(ans, nums[j] + nums[0] + suffix_min[j + 1])

        return ans


# Lingshen
class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        return nums[0] + sum(sorted(nums[1:])[:2])
