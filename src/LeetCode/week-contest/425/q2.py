class Solution:
    def isPossibleToRearrange(self, s: str, t: str, k: int) -> bool:
        n = len(s)
        sub_n = n // k

        t_map = Counter()

        for i in range(0, n - sub_n+1, sub_n):
            t_map[t[i: i+sub_n]] += 1
            t_map[s[i: i+sub_n]] -= 1
            
        for each in t_map.values():
            if each > 0:
                return False

        return True
        
    # AC!!!