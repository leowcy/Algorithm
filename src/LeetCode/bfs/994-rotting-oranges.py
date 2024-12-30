class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rotting = deque()
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        visited = set()
        m = len(grid)
        n = len(grid[0])
        days = [[-1] * n for _ in range(m)]
        fresh = set()

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    days[i][j] = 0
                    rotting.append((i, j))
                    visited.add((i, j))
                elif grid[i][j] == 1:
                    fresh.add((i, j))

        while rotting:
            c_i, c_j = rotting.popleft()
            for d_i, d_j in d:
                n_i, n_j = c_i + d_i, c_j + d_j
                if (
                    0 <= n_i < m
                    and 0 <= n_j < n
                    and (n_i, n_j) not in visited
                    and grid[n_i][n_j] == 1
                ):
                    days[n_i][n_j] = days[c_i][c_j] + 1
                    grid[n_i][n_j] = 2
                    rotting.append((n_i, n_j))
                    visited.add((n_i, n_j))

        if len(fresh) == 0:
            return 0

        ans = -inf
        for f_i, f_j in fresh:
            if days[f_i][f_j] == -1:
                return -1
            else:
                ans = max(ans, days[f_i][f_j])

        return ans
