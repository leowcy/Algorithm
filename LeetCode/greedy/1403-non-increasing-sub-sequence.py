class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        s_sum = sum(nums)
        nums.sort(reverse=True)
        temp = 0
        ans = []
        for i, val in enumerate(nums):
            temp += val
            ans.append(val)
            if temp > s_sum // 2:
                return ans


# Solution 2: no extra space
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        s_sum = sum(nums)
        nums.sort(reverse=True)
        temp = 0
        for i, val in enumerate(nums):
            temp += val
            if temp > s_sum // 2:
                return nums[: i + 1]
