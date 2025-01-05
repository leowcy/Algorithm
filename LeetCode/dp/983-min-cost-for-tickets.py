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


# Solution2: Problem is here if days[-1] ~ 10**9, then time will be exceeded.
class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        f = [0] * (days[-1] + 1)

        for i in range(1, days[-1] + 1):
            if i not in days:
                f[i] = f[i - 1]
            else:
                f[i] = min(
                    f[i - 1] + costs[0],
                    f[max(i - 7, 0)] + costs[1],
                    f[max(i - 30, 0)] + costs[2],
                )

        return f[-1]


# Solution 3: O(n) time
class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        f = [0] * (len(days) + 1)
        j = k = 0

        for i, d in enumerate(days):
            while days[j] <= d - 7:
                j += 1

            while days[k] <= d - 30:
                k += 1

            f[i + 1] = min(f[i] + costs[0], f[j] + costs[1], f[k] + costs[2])

        return f[-1]
