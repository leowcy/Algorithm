# Beat 5% - Brute force solution
class Solution:
    def countServers(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        ans = []

        for i in range(m):
            server_count = 0
            visited = []
            for j in range(n):
                if grid[i][j] == 1:
                    server_count += 1
                    visited.append((i, j))
            if server_count > 1:
                ans.extend(visited)

        for j in range(n):
            server_count = 0
            visited = []
            for i in range(m):
                if grid[i][j] == 1:
                    server_count += 1
                    visited.append((i, j))
            if server_count > 1:
                for each_i, each_j in visited:
                    if (each_i, each_j) not in ans:
                        ans.append((each_i, each_j))

        return len(ans)


# Elegant solution - beat 52%
class Solution:
    def countServers(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        rows, cols = Counter(), Counter()
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    rows[i] += 1
                    cols[j] += 1

        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1 and (rows[i] > 1 or cols[j] > 1):
                    ans += 1

        return ans
