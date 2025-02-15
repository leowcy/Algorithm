# Leetcode 3446
class Solution:
    def sortMatrix(self, grid: List[List[int]]) -> List[List[int]]:
        m, n = len(grid), len(grid[0])

        # make a k from [1, n + m - 1] represent diagonals from top right to bottom left
        # k = i + n  - j => from 1 to 5 in the example 1
        # min_j = max(0, i + n - k)
        # max_j = min(n-1, i + n - k)
        # i - j = 1
        for k in range(1, m + n):
            min_j = max(0, n - k)  # i == 0
            max_j = min(n - 1, m - 1 + n - k)  # i == m-1
            temp = [grid[k - n + j][j] for j in range(min_j, max_j + 1)]
            temp.sort(reverse=(min_j == 0))
            for j, val in zip(range(min_j, max_j + 1), temp):
                grid[k - n + j][j] = val
        return grid
