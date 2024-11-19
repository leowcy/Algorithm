class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        n = len(s)

        t = set()

        for i in range(n-k+1):
            t.add(s[i:i+k])
        
        # math
        return len(t) == 2 ** k