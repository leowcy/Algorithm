class Solution:
    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        
        n = len(s)
        # keep track of the time of qualified strs
        freq_map = {}

        for i in range(minSize, maxSize+1):
            # count = Counter()
            for j in range(n-i+1):
                curr = s[j: j+i]
                # translate str to set
                curr_s = set(curr)
                if len(curr_s) <= maxLetters:
                    freq_map[curr] = 1 + freq_map.get(curr, 0)

        # at the end, loop the map to get the max nums of times and return it
        ans = 0
        for _, v in freq_map.items():
            ans = max(ans, v)
        return ans


# Solution 2: No need to consider maxSize here. Result will only be in minSize.
class Solution:
    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        
        n = len(s)
        # keep track of the time of qualified strs
        freq_map = {}

       
        # count = Counter()
        for j in range(n-minSize+1):
            curr = s[j: j+minSize]
            # translate str to set
            curr_s = set(curr)
            if len(curr_s) <= maxLetters:
                freq_map[curr] = 1 + freq_map.get(curr, 0)

        # at the end, loop the map to get the max nums of times and return it
        ans = 0
        for _, v in freq_map.items():
            ans = max(ans, v)
        return ans