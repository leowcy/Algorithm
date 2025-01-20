# Timeout solution - Still O(N^2)
class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        n = len(s)
        suffix = [set()] * n
        for k in range(n - 1, 1, -1):
            suffix[k] = set(s[k:])

        prefix = set()
        ans = set()
        prefix.add(s[0])
        for j in range(1, n - 1):
            for each in prefix:
                if each in suffix[j + 1]:
                    cur = each + s[j] + each
                    if cur not in ans:
                        ans.add(cur)
            prefix.add(s[j])

        return len(ans)


# Use letter only has 26 rules. Make a length of 26 array. Then loop 26 times inside to check
# if we found the qualified number and update the ans set.
class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        n = len(s)
        pre = [0] * 26
        suf = [0] * 26

        for i in range(1, n):
            suf[ord(s[i]) - ord("a")] += 1

        ans = set()
        for i in range(1, n - 1):
            pre[ord(s[i - 1]) - ord("a")] += 1
            suf[ord(s[i]) - ord("a")] -= 1

            for j in range(26):
                if pre[j] > 0 and suf[j] > 0:
                    cur = chr(j + ord("a")) + s[i] + chr(j + ord("a"))
                    ans.add(cur)

        return len(ans)
