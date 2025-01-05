class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        
        # for each in s:
        #     idx = t.index(each)
        #     t = t[:idx] + t[idx+1:] # slice it
        
        # return t
    
        # Solution 2 Math:
        s_sum = sum(ord(x) for x in s)
        t_sum = sum(ord(x) for x in t)

        return chr(t_sum - s_sum)