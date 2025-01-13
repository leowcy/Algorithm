class Solution:
    def maximumAmount(self, coins: List[List[int]]) -> int:
        m, n = len(coins), len(coins[0])

        @cache
        def dfs(i, j, k):
            if i < 0 or j < 0:
                return -inf

            cur = coins[i][j]
            if i == 0 and j == 0:
                return max(cur, 0) if k > 0 else cur

            res = max(dfs(i - 1, j, k), dfs(i, j - 1, k)) + cur
            if cur < 0 and k > 0:
                res = max(res, dfs(i - 1, j, k - 1), dfs(i, j - 1, k - 1))
            return res

        return dfs(m - 1, n - 1, 2)
