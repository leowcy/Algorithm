class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        n = len(grid)
        queue = deque()
        direction = [(1,0), (-1,0), (0,1), (0,-1)]
        ans = -1
        visited = [[0] * n for _ in range(n)]

        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1: # find land - 扫雷思路
                    queue.append((i,j,0))
                
        while queue:
            t_i, t_j, distance = queue.popleft()
            ans = max(ans, distance)
            for d_i, d_j in direction:
                n_i = d_i + t_i
                n_j = d_j + t_j

                if 0 <= n_i < n and 0 <= n_j < n and visited[n_i][n_j] == 0 and grid[n_i][n_j] == 0:
                    visited[n_i][n_j] = 1
                    queue.append((n_i, n_j, distance+1))

        return ans if ans > 0 else -1