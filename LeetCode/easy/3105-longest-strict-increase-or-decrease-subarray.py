# Beat 100%
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 2:
            return 1
        temp = 1
        ans = 0
        # find strictly increasing
        for i in range(1, n):
            if nums[i] > nums[i-1]:
                temp += 1
            else:
                temp = 1
            ans = max(ans, temp)

        temp = 1
        # find strictly decreasing
        for j in range(1, n):
            if nums[j] < nums[j-1]:
                temp += 1
            else:
                temp = 1
            ans = max(ans, temp)

        return ans