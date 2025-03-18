class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        ans = 1
        left = 0
        temp = 0

        for i in range(len(nums)):
            while temp & nums[i] != 0:
                temp ^= nums[left]
                left += 1

            temp |= nums[i]
            ans = max(ans, i - left + 1)

        return ans
