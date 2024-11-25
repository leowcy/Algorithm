# Solution 1: DP
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)

        @cache
        def dp(i):
            # stop at index 0 or 1
            if i <= 1:
                return 0
            
            return min(dp(i-1) + cost[i-1], dp(i-2) + cost[i-2])
            
        return dp(n)


# Solution 2:
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        
        res = [0] * (n)

        for i in range(n):
            if i <= 1:
                res[i] = cost[i]
            else:
                res[i] = min(res[i-1], res[i-2]) + cost[i]

        return min(res[n-1], res[n-2])


# Solution 3: O(1) space
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        
        f0 = cost[0]
        f1 = cost[1]

        if n == 2:
            return min(f0, f1)

        for i in range(2, n):
            new_f = min(f0, f1) + cost[i]
            f0 = f1
            f1 = new_f

        return min(f0, f1)
