class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        ans = 0
        for target in set(nums):
            f0, f1, f2 = 0, -inf, -inf
            for val in nums:
                f2 = max(f1, f2) + (val == k)
                f1 = max(f0, f1) + (val == target)
                f0 += val == k
            ans = max(ans, f1, f2)

        return ans
