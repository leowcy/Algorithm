# Solution1: DP - Top to bottom
class Solution:
    def climbStairs(self, n: int) -> int:
        @cache
        def dp(i) -> int:
            if i < 0:
                return 0
            if i == 1 or i == 0:
                return 1
            return dp(i-1) + dp(i-2)
        
        return dp(n)


# Solution2: Bottom to Top with O(n) space array
class Solution:
    def climbStairs(self, n: int) -> int:
        
        c_s = [0] * (n+2)
        c_s[1] = 1
        c_s[2] = 2

        for i in range(3, n+1):
            c_s[i] = c_s[i-1] + c_s[i-2]
        
        return c_s[n]


# Solution3: Bottom to Top with O(1) space
class Solution:
    def climbStairs(self, n: int) -> int:

        c1 = 1
        c2 = 2

        for i in range(3, n+1):
            new_c = c1 + c2
            c1 = c2
            c2 = new_c
        
        return c2
