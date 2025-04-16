class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)

        @cache
        def dfs(x, y):
            if x < 0 or y < 0:
                return 0

            if text1[x] == text2[y]:
                return dfs(x - 1, y - 1) + 1

            return max(dfs(x - 1, y), dfs(x, y - 1))

        return dfs(m - 1, n - 1)
