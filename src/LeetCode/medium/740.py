class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        
        n = len(nums)
        nums.sort()
        cnt = Counter(nums)

        right = nums[-1]

        dp = [0, cnt[1]]

        for i in range(2, right+1):
            temp = max(dp[1], dp[0] + i * cnt[i])
            dp[0] = dp[1]
            dp[1] = temp
        
        return dp[1]