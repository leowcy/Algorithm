class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        n = len(grid)
        c = []

        for i in range(n):
            t = []
            for j in range(n):
                t.append(grid[j][i])
            c.append(t)

        d_d = defaultdict(int)
        for each in grid:
            d_d[tuple(each)] += 1

        ans = 0
        for each in c:
            ans += d_d[tuple(each)]

        return ans
