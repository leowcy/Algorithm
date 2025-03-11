# 3306 - easier version
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        d = defaultdict(int)
        left = ans = 0

        for i, val in enumerate(s):
            # update value
            d[val] += 1

            while len(d) == 3:
                d[s[left]] -= 1
                if d[s[left]] == 0:
                    del d[s[left]]
                left += 1

            # update ans
            ans += left

        return ans
