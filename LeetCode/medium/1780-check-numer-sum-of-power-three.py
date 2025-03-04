class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        helper = [0] * 16
        for i in range(16):
            helper[i] = 3**i

        @cache
        def dfs(t, x):
            if t == helper[x]:
                return True

            if x < 0:
                return False

            if t < helper[x]:
                return dfs(t, x - 1)

            return dfs(t, x - 1) or dfs(t - helper[x], x - 1)

        return dfs(n, 15)
