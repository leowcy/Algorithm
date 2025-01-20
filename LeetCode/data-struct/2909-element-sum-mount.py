class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        n = len(nums)
        suffix_min = [0] * n
        suffix_min[-1] = nums[-1]

        for k in range(n - 2, -1, -1):
            suffix_min[k] = min(suffix_min[k + 1], nums[k])

        prefix_min = nums[0]
        ans = inf
        for j in range(1, n - 1):
            if prefix_min < nums[j] and nums[j] > suffix_min[j + 1]:
                ans = min(ans, prefix_min + nums[j] + suffix_min[j + 1])

            # update at the end
            prefix_min = min(prefix_min, nums[j])

        return ans if ans != inf else -1
