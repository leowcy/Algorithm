class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)

        @cache
        def dfs(x, y):
            if x < 0:
                temp = 0
                for i in range(y + 1):
                    temp += ord(s2[i])
                return temp
            if y < 0:
                temp = 0
                for i in range(x + 1):
                    temp += ord(s1[i])
                return temp

            if s1[x] == s2[y]:
                return dfs(x - 1, y - 1)

            return min(dfs(x - 1, y) + ord(s1[x]), dfs(x, y - 1) + ord(s2[y]))

        return dfs(m - 1, n - 1)
