class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        n = len(s)
        ans = 0

        for i in range(k):
            if s[i] in "aeiou":
                ans += 1

        temp = ans
        for i in range(k, n):
            if s[i] in "aeiou" and s[i - k] not in "aeiou":
                temp += 1
            elif s[i] not in "aeiou" and s[i - k] in "aeiou":
                temp -= 1

            ans = max(ans, temp)
        return ans
