# Time/Space exceed. 512/881 passed
from functools import cache


class Solution:
    def maxDistance(self, s: str, k: int) -> int:
        n = len(s)
        ans = 0
        d = [(0, 1), (0, -1), (-1, 0), (1, 0)]
        helper = {"N": (0, 1), "S": (0, -1), "E": (1, 0), "W": (-1, 0)}

        @cache
        def dfs(x, i, j, k):
            nonlocal ans
            ans = max(ans, abs(i) + abs(j))

            if x >= n:
                return

            ci, cj = helper[s[x]]
            if k > 0:
                for di, dj in d:
                    if ci == di and cj == dj:
                        dfs(x+1, i+ci, j+cj, k)
                    else:
                        dfs(x+1, i+di, j+dj, k-1)
            else:
                dfs(x + 1, i + ci, j + cj, k)

        dfs(0, 0, 0, k)
        return ans

s = Solution()
print(s.maxDistance("EEESNWENEW", 9))


# 像脑筋急转弯 - 探索四个象限即可比较出最大值
class Solution:
    def maxDistance(self, s: str, k: int) -> int:
        # think it as for section will be max distance
        helper = [{"N", "E"}, {"N", "W"}, {"S", "E"}, {"S", "W"}]
        ans = 0

        for each_d in helper:
            k_temp = k
            dis = 0
            for each in s:
                if each in each_d or k_temp:
                    dis += 1
                    k_temp -= each not in each_d
                else:
                    dis -= 1
                ans = max(ans, dis)

        return ans


# LingGod solution
class Solution:
    def maxDistance(self, s: str, k: int) -> int:
        d = defaultdict(int)
        ans = 0

        for i, val in enumerate(s):
            d[val] += 1
            move = k

            def helper(x, y):
                nonlocal move
                min_d = min(x, y, move)
                move -= min_d
                return abs(x - y) + 2 * min_d

            ans = max(ans, helper(d["N"], d["S"]) + helper(d["E"], d["W"]))

        return ans
