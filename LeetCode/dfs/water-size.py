class Solution:
    def pondSizes(self, land: List[List[int]]) -> List[int]:
        m = len(land)
        n = len(land[0])
        ans = []

        def dfs(i, j):
            if i < 0 or i >= m or j < 0 or j >= n or land[i][j] != 0:
                return 0

            land[i][j] = 1

            return (
                1
                + dfs(i + 1, j)
                + dfs(i - 1, j)
                + dfs(i + 1, j + 1)
                + dfs(i + 1, j - 1)
                + dfs(i - 1, j + 1)
                + dfs(i - 1, j - 1)
                + dfs(i, j + 1)
                + dfs(i, j - 1)
            )

        for i in range(m):
            for j in range(n):
                if land[i][j] == 0:
                    ans.append(dfs(i, j))

        return sorted(ans)
