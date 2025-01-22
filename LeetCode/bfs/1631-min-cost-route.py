# Binary search the possible result + BFS. Condition is to check (n-1, m-1) in seen and update the value.
class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        n = len(heights)
        m = len(heights[0])
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        left, right, ans = -1, 10**6, 0

        while left + 1 < right:
            mid = (left + right) // 2
            q = deque([(0, 0)])
            visited = set([(0, 0)])

            while q:
                i, j = q.popleft()
                for di, dj in d:
                    ni, nj = di + i, dj + j
                    if (
                        0 <= ni < n
                        and 0 <= nj < m
                        and (ni, nj) not in visited
                        and abs(heights[i][j] - heights[ni][nj]) <= mid
                    ):
                        visited.add((ni, nj))
                        q.append((ni, nj))

            if (n - 1, m - 1) in visited:
                ans = mid
                right = mid
            else:
                left = mid

        return ans
