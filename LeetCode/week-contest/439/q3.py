# This solution is for getting Sum of K subarrays with length of M.
# But it is asking for at least M. Will need to update a bit.
class Solution:
    def maxSum(self, nums: List[int], k: int, m: int) -> int:
        n = len(nums)
        prefix = [0] * (n+1)
        for i in range(n):
            prefix[i+1] = prefix[i] + nums[i]
        print(prefix)


        @cache
        def dfs(x, times):
            if x < m - 1:
                return 0 if times == 0 else -inf

            print(f"{x} - {times}:")
            print(prefix[x+1] - prefix[x+1-m])
            
            if times == 0:
                return dfs(x-1, times)
            
            return max(
                dfs(x-1, times),
                dfs(x-m, times-1) + prefix[x+1] - prefix[x+1-m]
            )
            
        return dfs(n-1, k)
