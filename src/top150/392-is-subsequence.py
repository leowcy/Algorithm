class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) == 0:
            return True
        if len(s) > len(t):
            return False

        i = 0

        for j in range(len(t)):
            if t[j] == s[i]:
                i += 1
            if i == len(s):
                return True

        return False
    
        # 
        i, j = 0, 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i +=1
            j += 1
        
        return i == len(s)