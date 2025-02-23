def Knapsack(capacity, values, weight) -> int:
    n = len(values)

    def dfs(x, c):
        if x < 0:
            return 0
        if c < weight[x]:
            return dfs(x - 1, c)

        return max(dfs(x - 1, c), dfs(x - 1, c - weight[x]) + values[x])

    return dfs(n - 1, capacity)


c = 100
v = [1, 50, 50]
w = [20, 50, 90]
print(Knapsack(c, v, w))
