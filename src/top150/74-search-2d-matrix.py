class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
        # matrix_to_list = []

        # for row in matrix:
        #     for column in row:
        #         matrix_to_list.append(column)
        
        # i, j = 0, len(matrix_to_list)-1

        # while i <= j:
        #     mid = (i + j) // 2
        #     if matrix_to_list[mid] == target:
        #         return True
        #     elif matrix_to_list[mid] < target:
        #         i = mid + 1
        #     else:
        #         j = mid - 1
        
        # return False
        # TC: O(log(m*n)) SC: O(m*n)

        top = 0
        bot = len(matrix) - 1

        while top <= bot:
            mid = (top + bot) // 2
            if matrix[mid][0] > target:
                bot = mid - 1
            elif matrix[mid][len(matrix[0])-1] < target:
                top = mid + 1
            else:
                break
        
        row = (top + bot) // 2 # Found row

        l = 0
        r = len(matrix[0]) - 1

        while l <= r:
            mid = (l + r) // 2
            if matrix[row][mid] == target:
                return True
            elif matrix[row][mid] < target:
                l = mid + 1
            else:
                r = mid - 1
        
        return False

    