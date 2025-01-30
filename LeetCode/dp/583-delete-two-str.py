class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)

        @cache
        def dfs(x, y):
            if x < 0:
                return y + 1
            if y < 0:
                return x + 1

            if word1[x] == word2[y]:
                return dfs(x - 1, y - 1)

            return min(dfs(x - 1, y), dfs(x, y - 1)) + 1

        return dfs(m - 1, n - 1)
