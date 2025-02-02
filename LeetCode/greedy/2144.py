class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        n = len(cost)
        ans = sum(cost)
        cost.sort()

        while n >= 3:
            ans -= cost[n - 3]
            n -= 3

        return ans
