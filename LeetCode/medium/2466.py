class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        
        p = ["0" * zero, "1" * one]
        MOD = 10 ** 9 + 7

        @cache
        def dp(cur_s, t):
            if len(cur_s) == t:
                return 1
            if len(cur_s) > t:
                return 0
            
            return sum([dp(cur_s + each, t) for each in p]) % MOD


        res = 0
        for t in range(low, high+1):
            res += dp("", t)
        
        return res % MOD


class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        
        MOD = 10 ** 9 + 7

        @cache
        def dp(i):
            if i < 0:
                return 0
            if i == 0:
                return 1
            
            return (dp(i-zero) + dp(i-one)) % MOD


        res = 0
        for t in range(low, high+1):
            res += dp(t)
        
        return res % MOD
    

# Solution 3:
class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        MOD = 10 ** 9 + 7

        f = [1] + [0] * high

        for i in range(1, high+1):
            if i >= zero:
                f[i] = f[i-zero]
            if i >= one:
                f[i] = (f[i] + f[i-one]) % MOD
        
        return sum(f[low:]) % MOD