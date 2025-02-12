class Solution:
    def makeFancyString(self, s: str) -> str:
        left = 0
        ans = s[0]

        for i in range(1, len(s)):
            if s[i] != s[left]:
                left = i

            if i - left + 1 >= 3:
                continue

            ans += s[i]

        return ans
