class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        # mod = (10 ** 9) + 7

        @cache
        def dfs(x, y): # the if condition below order matters. Check x<y first, then check y < 0 to return 1. At the end check x < 0 means reach the end of s string.
            if x < y:
                return 0
            if y < 0:
                return 1
            if x < 0:
                return 0

            if s[x] == t[y]:
                return dfs(x - 1, y - 1) + dfs(x - 1, y)
            return dfs(x - 1, y)

        return dfs(m - 1, n - 1)
