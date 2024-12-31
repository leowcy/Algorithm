class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:

        @cache
        def dfs(x):
            if x <= 0:
                return 0
            if x not in days:
                return dfs(x - 1)
            return min(
                dfs(x - 1) + costs[0], dfs(x - 7) + costs[1], dfs(x - 30) + costs[2]
            )

        return dfs(days[-1])
