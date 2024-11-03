class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) <= 1:
            return len(s)

        cur_s = ""
        temp_longest = 0
        res = 0
        
        for l in range(len(s)):
            r = l
            while (r < len(s)):
                # not found duplicate yet
                if s[r] not in cur_s:
                    cur_s += s[r]
                    temp_longest += 1
                    r += 1
                else:
                    # found duplicate: Compare the longest len and reset everything
                    res = max(res, temp_longest)
                    cur_s = ""
                    temp_longest = 0
                    r = len(s)
        
        return res