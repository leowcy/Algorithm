class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(haystack) == 1:
            return 0 if haystack == needle else -1

        # sliding window
        i = 0
        j = len(needle)

        while j <= len(haystack):
            if haystack[i:j] == needle:
                return i
            else:
                i += 1
                j += 1
        
        return -1
    
        # for loop
        # for i in range(len(haystack)):
        #     if haystack[i:i+len(needle)] == needle:
        #         return i
        
        # return -1
