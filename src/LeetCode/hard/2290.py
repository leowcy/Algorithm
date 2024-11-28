class Solution:
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        d = [(0,1), (1,0), (-1, 0), (0, -1)]

        deque_ = deque([(0,0,0)])
        visited = [[False] * n for _ in range(m)]
        visited[0][0] = True

        while deque_:
            x, y, o_r = deque_.popleft()

            if x == m-1 and y == n-1:
                return o_r
            
            for dx, dy in d:
                nx, ny = x+dx, y + dy

                if 0 <= nx < m and 0 <= ny < n and not visited[nx][ny]:
                    visited[nx][ny] = True
                    if grid[nx][ny] == 0:
                        deque_.appendleft((nx, ny, o_r))
                    else:
                        deque_.append((nx, ny, o_r+1))
        
        return -1
