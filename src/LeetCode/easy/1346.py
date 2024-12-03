class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        arr_set = Counter(arr)

        for each in arr:
            if each * 2 in arr_set:
                if each == 0 and arr_set[each] == 1:
                    continue
                return True
        
        return False