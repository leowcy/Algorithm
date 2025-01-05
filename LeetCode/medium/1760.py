class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        
        def check(x) -> bool:
            times = 0
            for each in nums:
                if each <= x:
                    continue
                else:
                    times += (each - 1) // x
            
            return times <= maxOperations
        
        r = max(nums) + 1
        l = 0

        while l + 1 < r:
            mid = (l + r) // 2
            if check(mid):
                r = mid
            else:
                l = mid
        
        return r