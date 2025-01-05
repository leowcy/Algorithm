class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex == 0:
            return [1]
        if rowIndex == 1:
            return [1, 1]
        
        prev_rows = self.getRow(rowIndex-1)
        
        curr_row = [1]
        for i in range(1, len(prev_rows)):
            curr_row.append(prev_rows[i-1] + prev_rows[i])
        
        curr_row.append(1)
        return curr_row