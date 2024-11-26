# TC:  O(nm)
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n, m = len(haystack), len(needle)

        for i in range(n-m+1):
            cur = haystack[i:i+m]
            if cur == needle:
                return i
        
        return -1
