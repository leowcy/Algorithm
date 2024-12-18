class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        if n == 1:
            return 1 if grid[0][0] == 0 else -1

        if grid[0][0] == 1 or grid[n-1][n-1] == 1:
            return -1
        
        queue = deque([(0,0,1)])
        d = [(0,1), (0,-1), (1,0), (-1,0), (1,1), (1,-1), (-1,1), (-1,-1)]
        grid[0][0] = 1 # mark as 1 since visited

        while queue:
            cx, cy, steps = queue.popleft()
            for dx, dy in d:
                nx = dx + cx
                ny = dy + cy

                if nx == n-1 and ny == n-1:
                    return steps + 1

                if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] == 0:                    
                    queue.append((nx, ny, steps + 1))
                    grid[nx][ny] = 1 # mark as 1 since visited

        return -1