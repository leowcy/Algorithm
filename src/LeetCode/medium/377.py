class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        @cache
        def dp(t: int) -> int:
            if t == 0:
                return 1
            if t < 0: # improve from 79% -> beats 88.45%
                return 0
            
            res = 0
            for each in nums:
                if t >= each:
                    res += dp(t-each)
            return res
        
        return dp(target)


# Solution 2: Beat 90.3%
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        f = [1] + [0] * target

        for i in range(1, target+1):
            f[i] = sum(f[i-x] for x in nums if x <= i)
        
        return f[target]