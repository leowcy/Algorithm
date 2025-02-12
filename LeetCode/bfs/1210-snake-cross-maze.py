class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
        step, n = 1, len(grid)
        vis = {(0, 0, 0)}
        q = [(0, 0, 0)]

        while q:
            temp = q
            q = []
            for x, y, d in temp:
                for t in (x + 1, y, d), (x, y + 1, d), (x, y, 1 - d):
                    nx, ny, nd = t
                    x2, y2 = nx + nd, ny + (1 - nd)
                    if (
                        x2 < n
                        and y2 < n
                        and t not in vis
                        and grid[nx][ny] == 0
                        and grid[x2][y2] == 0
                        and (nd == d or grid[nx + 1][ny + 1] == 0)
                    ):
                        if nx == n - 1 and ny == n - 2:
                            return step
                        vis.add(t)
                        q.append(t)
            step += 1

        return -1
