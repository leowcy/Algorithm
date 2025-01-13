class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        dp = [0] * (target + 1)
        dp[0] = 1

        for i in range(1, target + 1):
            temp = 0
            for x in nums:
                if i >= x:
                    temp += dp[i - x]
            dp[i] = temp

        return dp[target]
