# Dfs solution
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m = len(grid)
        n = len(grid[0])
        ans = 0
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        def dfs(i, j):
            grid[i][j] = "2"
            for di, dj in d:
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] == "1":
                    dfs(ni, nj)

        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1":
                    dfs(i, j)
                    ans += 1

        return ans


# Bfs solution
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m = len(grid)
        n = len(grid[0])
        ans = 0
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        visited = (
            set()
        )  # Initially here I use list instead of set then causing time out issue! Anther solution without using visited list is we can mark the grid data from "1" to "2" for example.
        q = deque()

        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1" and (i, j) not in visited:
                    visited.add((i, j))
                    q.append((i, j))
                    ans += 1
                    while q:
                        ci, cj = q.popleft()
                        for di, dj in d:
                            ni, nj = ci + di, cj + dj
                            if (
                                0 <= ni < m
                                and 0 <= nj < n
                                and (ni, nj) not in visited
                                and grid[ni][nj] == "1"
                            ):
                                q.append((ni, nj))
                                visited.add((ni, nj))

        return ans
