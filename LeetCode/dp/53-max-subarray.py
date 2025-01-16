# Solution 1: time exceed - O(n^2)
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]

        ans = -inf
        for i in range(n):
            temp = sum_subarray = nums[i]
            for j in range(i + 1, n):
                temp += nums[j]
                sum_subarray = max(sum_subarray, temp)
            ans = max(ans, sum_subarray)

        return ans


# Solution 2: DP
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]

        dp = [0] * n
        dp[0] = nums[0]
        for i in range(1, n):
            dp[i] = max(nums[i], dp[i - 1] + nums[i])

        return max(dp)
