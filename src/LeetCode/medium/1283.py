class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        n = len(nums)
        if threshold == n:
            return max(nums)
        
        l = 0
        r = max(nums)

        def _qualified(x):
            ans = 0
            for each in nums:
                ans += (each + x - 1) // x # remember to minus one
            print(ans)
            return ans <= threshold

        while l+1 < r:
            mid = (l + r) // 2
            print(mid)
            if _qualified(mid):
                r = mid
            else:
                l = mid
        
        return r