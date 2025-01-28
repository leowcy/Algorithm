# BFS
class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        water = deque()
        visited = set()
        ans = 0

        for i in range(m):
            for j in range(n):
                if grid[i][j] != 0 and (i, j) not in visited:
                    visited.add((i, j))
                    water.append((i, j))
                    temp = 0
                    while water:
                        ci, cj = water.popleft()
                        temp += grid[ci][cj]
                        ans = max(ans, temp)
                        for di, dj in d:
                            ni, nj = ci + di, cj + dj
                            if (
                                0 <= ni < m
                                and 0 <= nj < n
                                and (ni, nj) not in visited
                                and grid[ni][nj] != 0
                            ):
                                visited.add((ni, nj))
                                water.append((ni, nj))

        return ans


# DFS
class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        ans = 0

        def dfs(i, j):
            fish = 0
            if grid[i][j] == 0:
                return fish

            fish += grid[i][j]
            grid[i][j] = -1

            for di, dj in d:
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] > 0:
                    fish += dfs(ni, nj)

            return fish

        for i in range(m):
            for j in range(n):
                if grid[i][j] != 0:
                    ans = max(ans, dfs(i, j))

        return ans
