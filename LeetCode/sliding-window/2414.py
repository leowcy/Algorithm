# Beat 96%
class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        ans = 1
        left = 0
        prev = s[left]

        for i in range(1, len(s)):
            if ord(prev) + 1 != ord(s[i]):
                prev = s[i]
                left = i
                continue

            prev = s[i]
            ans = max(ans, i - left + 1)

        return ans


# Ling god solution
class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        ans = cnt = 1
        for x, y in pairwise(map(ord, s)): # pairwise is 3.10 solution as zip
            cnt = cnt + 1 if x + 1 == y else 1
            ans = max(ans, cnt)
        return ans
