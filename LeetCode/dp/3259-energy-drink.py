# bottom to top
class Solution:
    def maxEnergyBoost(self, energyDrinkA: List[int], energyDrinkB: List[int]) -> int:
        n = len(energyDrinkA)

        f = [[0] * 2 for _ in range(n + 1)]
        f[1][0] = energyDrinkA[0]
        f[1][1] = energyDrinkB[0]

        for i in range(1, n):
            f[i + 1][0] = max(f[i][0], f[i - 1][1]) + energyDrinkA[i]
            f[i + 1][1] = max(f[i][1], f[i - 1][0]) + energyDrinkB[i]

        return max(f[n][0], f[n][1])


# top to bottom
class Solution:
    def maxEnergyBoost(self, energyDrinkA: List[int], energyDrinkB: List[int]) -> int:
        n = len(energyDrinkA)

        @cache
        def dfs(x, is_a):
            if x < 0:
                return 0
            if is_a:
                return max(dfs(x - 1, True), dfs(x - 2, False)) + energyDrinkA[x]
            return max(dfs(x - 1, False), dfs(x - 2, True)) + energyDrinkB[x]

        return max(dfs(n - 1, False), dfs(n - 1, True))
