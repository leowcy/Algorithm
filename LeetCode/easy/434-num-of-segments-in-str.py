class Solution:
    def countSegments(self, s: str) -> int:

        if len(s) == 0:
            return 0

        res = 0
        found_space = False
        found_non_space = False

        for each in s:
            if each != " " and not found_non_space:
                res += 1
                found_non_space = True
                found_space = False
            elif each == " " and not found_space:
                found_space = True
                found_non_space = False
        
        return res