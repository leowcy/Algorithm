class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        missing, twice = -1, -1
        d = defaultdict(int)
        for i in range(1, n * n + 1):
            d[i] = 0

        for row in grid:
            for each in row:
                d[each] += 1

        for i, val in d.items():
            if val == 0:
                missing = i
            if val > 1:
                twice = i

        return [twice, missing]
