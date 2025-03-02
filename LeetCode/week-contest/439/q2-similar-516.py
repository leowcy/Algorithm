class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)

        @cache
        def dfs(i, j):
            # empty str
            if i > j:
                return 0
            if i == j:
                return 1

            if s[i] == s[j]:
                return dfs(i + 1, j - 1) + 2

            return max(dfs(i + 1, j), dfs(i, j - 1))

        return dfs(0, n - 1)
