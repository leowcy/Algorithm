class Solution:
    def colorBorder(
        self, grid: List[List[int]], row: int, col: int, color: int
    ) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        cur_color = grid[row][col]
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        visited = [[False] * n for _ in range(m)]
        visited[row][col] = True
        borders = set() # take borders to change the grid value later on

        def dfs(i, j):
            for di, dj in d:
                ni, nj = i + di, j + dj
                if ni < 0 or ni >= m or nj < 0 or nj >= n or grid[ni][nj] != cur_color:
                    borders.add((i, j))
                elif not visited[ni][nj]:
                    visited[ni][nj] = True
                    dfs(ni, nj)

        dfs(row, col)
        for x, y in borders:
            grid[x][y] = color
        return grid
