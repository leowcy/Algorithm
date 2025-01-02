class Solution:
    def shortestBridge(self, grid: list[list[int]]) -> int:
        n = len(grid)
        first_land = deque()
        first_lands = deque()
        found = False
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        # find a random first_land first
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    first_land.append((i, j))
                    first_lands.append((i, j))
                    grid[i][j] = -1  # mark as visited
                    found = True
                    break
            if found:
                break

        # BFS find all the island with first_land
        while first_land:
            i, j = first_land.popleft()
            for di, dj in d:
                ni, nj = i + di, j + dj
                if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 1:
                    first_land.append((ni, nj))
                    first_lands.append((ni, nj))
                    grid[ni][nj] = -1

        # BFS find the closest island
        ans = 0
        while True:
            current_lands = first_lands
            first_lands = deque()
            while current_lands:
                i, j = current_lands.popleft()
                for di, dj in d:
                    ni, nj = i + di, j + dj
                    if 0 <= ni < n and 0 <= nj < n:
                        if grid[ni][nj] == 1:
                            return ans
                        elif grid[ni][nj] == 0:
                            grid[ni][nj] = -1
                            first_lands.append((ni, nj))
            ans += 1
