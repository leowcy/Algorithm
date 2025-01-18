class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0] * n for _ in range(n)]
        
        count = 1
        rowStart = 0
        rowEnd = n-1
        colStart = 0
        colEnd = n-1
    
        while(rowStart <= rowEnd and colStart <= colEnd):
            for i in range(colStart, colEnd+1):
                matrix[rowStart][i] = count
                count += 1
            rowStart += 1
        
            if rowStart > rowEnd:
                break
        
            for i in range(rowStart, rowEnd+1):
                matrix[i][colEnd] = count
                count += 1
            colEnd -= 1
        
            if colStart > colEnd:
                break
        
            for i in range(colEnd, colStart-1, -1):
                matrix[rowEnd][i] = count
                count += 1
            rowEnd -= 1
        
            if rowStart > rowEnd:
                break
        
            for i in range(rowEnd, rowStart-1, -1):
                matrix[i][colStart] = count
                count += 1
            colStart += 1
        return matrix