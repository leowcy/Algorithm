class Solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        cnt = Counter()

        for row in matrix:
            if row[0] == 1:
                for j in range(len(row)):
                    row[j] ^= 1
            cnt[tuple(row)] += 1
        
        return max(cnt.values())