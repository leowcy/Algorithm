class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque()
        m, n = len(grid), len(grid[0])
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    q.append((i, j))

        ans = 0
        added = False
        while q:
            for i in range(len(q)):
                ci, cj = q.popleft()
                for di, dj in d:
                    ni, nj = ci + di, cj + dj
                    if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] == 1:
                        grid[ni][nj] = 2
                        q.append((ni, nj))
                        if not added:
                            ans += 1
                            added = True
            added = False

        # judge if any remaining unrotted orange
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    return -1

        return ans
