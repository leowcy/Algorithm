class Solution:
    def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:
        m, n = len(mat), len(mat[0])

        # k = i + n - j => j = i + n - k
        for k in range(1, m + n - 1):
            min_j = max(0, n - k)
            max_j = min(n - 1, m - 1 + n - k)
            temp = []
            for j in range(min_j, max_j + 1):
                temp.append(mat[j + k - n][j])
            temp.sort(reverse=True)
            for j in range(min_j, max_j + 1):
                mat[j + k - n][j] = temp.pop()

        return mat
