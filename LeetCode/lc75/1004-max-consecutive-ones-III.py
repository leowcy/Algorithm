class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        n = len(nums)
        ans = left = 0

        for i, val in enumerate(nums):
            if val == 0:
                k -= 1

            while k < 0:
                if nums[left] == 0:
                    k += 1
                left += 1

            ans = max(ans, i - left + 1)

        return ans
