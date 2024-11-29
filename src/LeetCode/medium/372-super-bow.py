class Solution:
    def superPow(self, a: int, b: List[int]) -> int:
        if a == 1:
            return 1

        n = len(b)
        super_pow = 0
        for i, v in enumerate(b):
            super_pow += v * (10 ** (n-i-1))
        
        ans = 1
        for _ in range(super_pow):
            ans *= a
            ans %= 1337
        
        return ans
    

# above brute force time exceed.

class Solution:
    def superPow(self, a: int, b: List[int]) -> int:
        MOD = 1337
        ans = 1
        for e in reversed(b):
            ans = ans * pow(a, e, MOD) % MOD
            a = pow(a, 10, MOD)
        return ans
