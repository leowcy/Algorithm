class Solution:
    def minCosts(self, cost: List[int]) -> List[int]:
        n = len(cost)
        mn = inf
        ans = [-1] * n

        for i, val in enumerate(cost):
            mn = min(mn, val)
            ans[i] = mn

        return ans
