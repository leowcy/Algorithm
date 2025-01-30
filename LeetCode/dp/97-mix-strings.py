# Beat 100%!!!
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m, n, o = len(s1), len(s2), len(s3)

        @cache
        def dfs(x, y, z):
            if z < x or z < y:
                return False
            if z < 0:
                return True
            if x < 0:
                return s2[: y + 1] == s3[: z + 1]
            if y < 0:
                return s1[: x + 1] == s3[: z + 1]

            if s1[x] == s3[z] and s2[y] == s3[z]:
                return dfs(x - 1, y, z - 1) or dfs(x, y - 1, z - 1)
            elif s1[x] == s3[z]:
                return dfs(x - 1, y, z - 1)
            elif s2[y] == s3[z]:
                return dfs(x, y - 1, z - 1)
            else:
                return False

        return dfs(m - 1, n - 1, o - 1)
