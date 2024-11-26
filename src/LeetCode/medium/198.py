class Solution:
    def rob(self, nums: List[int]) -> int:
        
        n = len(nums)

        @cache
        def dp(i):
            if i < 0:
                return 0
            return max(dp(i-1), dp(i-2) + nums[i])
        
        return dp(n-1)