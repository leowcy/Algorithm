class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m = len(isWater)
        n = len(isWater[0])
        ans = [[-1] * n for _ in range(m)]
        q = deque()
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for i in range(m):
            for j in range(n):
                if isWater[i][j] == 1:
                    q.append((i, j))
                    ans[i][j] = 0

        while q:
            i, j = q.popleft()
            for di, dj in d:
                ni, nj = di + i, dj + j
                if 0 <= ni < m and 0 <= nj < n and ans[ni][nj] == -1:
                    ans[ni][nj] = ans[i][j] + 1
                    q.append((ni, nj))

        return ans


# Jan 1 2025
class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m = len(isWater)
        n = len(isWater[0])
        ans = [[-1] * n for _ in range(m)]
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        q = deque()

        for i in range(m):
            for j in range(n):
                if isWater[i][j] == 1:
                    ans[i][j] = 0
                    q.append((i, j))

        while q:
            ci, cj = q.popleft()
            for di, dj in d:
                ni, nj = ci + di, cj + dj
                if 0 <= ni < m and 0 <= nj < n and ans[ni][nj] == -1:
                    ans[ni][nj] = ans[ci][cj] + 1
                    q.append((ni, nj))

        return ans
