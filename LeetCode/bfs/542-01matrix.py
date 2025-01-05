class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        m = len(mat)
        n = len(mat[0])
        d = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        ans = [[0 for _ in range(n)] for _ in range(m)]
        visited = set()
        queue = deque()

        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    queue.append((i, j))
                    visited.add((i, j))

        while queue:
            c_i, c_j = queue.popleft()
            for d_i, d_j in d:
                n_i = d_i + c_i
                n_j = d_j + c_j
                if 0 <= n_i < m and 0 <= n_j < n and (n_i, n_j) not in visited:
                    ans[n_i][n_j] = ans[c_i][c_j] + 1
                    queue.append((n_i, n_j))
                    visited.add((n_i, n_j))

        return ans
