class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        ans = 0
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for i in range(m):
            for j in range(n):
                if grid[i][j] != 0:
                    q = deque([(i, j)])
                    temp = 0
                    while q:
                        ci, cj = q.popleft()
                        temp += grid[ci][cj]
                        grid[ci][cj] = 0
                        for di, dj in d:
                            ni, nj = ci + di, cj + dj
                            if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] != 0:
                                q.append((ni, nj))
                    ans = max(ans, temp)

        return ans
