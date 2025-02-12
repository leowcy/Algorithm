class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        left = 0

        for i, val in enumerate(t):
            if left < len(s) and val == s[left]:
                left += 1

            if left == len(s):
                break

        return left == len(s)
