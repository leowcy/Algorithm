class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if n == k:
            return max(nums)
        if k == 1:
            return sum(nums)
        
        l = max(nums)-1
        r = sum(nums)

        def _qualified(mx):
            cnt = 1
            s = 0
            for x in nums:
                if s + x <= mx:
                    s += x
                else:
                    if cnt == k: # already divide into k groups. Now k+1 coming. Return False
                        return False
                    cnt += 1
                    s = x
            
            return True

        while l + 1 < r:
            mid = (l + r) // 2
            # print(mid)
            if _qualified(mid):
                r = mid
            else:
                l = mid
        
        return r