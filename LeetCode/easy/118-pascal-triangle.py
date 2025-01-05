class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 1:
            return [[1]]
        
        if numRows == 2:
            return [[1], [1,1]]

        res = [[] for _ in range(numRows)]
        for i in range(numRows):
            for j in range(i+1):
                res[i].append(1)

        for i in range(2, numRows): # loop numRows times
            for j in range(i+1): # loop i+1 time for column
                if j == 0 or j == i:
                    res[i][j] = 1
                else:
                    res[i][j] = res[i-1][j-1] + res[i-1][j]
        
        return res
