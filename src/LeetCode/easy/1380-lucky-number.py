class Solution:
    def luckyNumbers(self, matrix: list[list[int]]) -> list[int]:
        len_row = len(matrix)
        len_column = len(matrix[0])
        min_in_row, max_in_column = [], []

        for row in matrix:
            temp = float("inf")
            for column in row:
                temp = min(temp, column)
            min_in_row.append(temp)
                
        for j in range(len_column):
            temp = float("-inf")
            for i in range(len_row):
                temp = max(temp, matrix[i][j])
            max_in_column.append(temp)
        
        # since every num is unique, find the common is the answer
        res = []
        for each in min_in_row:
            if each in max_in_column:
                res.append(each)
        
        return res


test = Solution()
inputs = [
    [[3,7,8],[9,11,13],[15,16,17]],
    [[1,10,4,2],[9,3,8,7],[15,16,17,12]],
    [[7,8],[1,2]],
]
for each in inputs:
    print(test.luckyNumbers(each)) 