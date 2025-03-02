class Solution:
    def longestPalindromicSubsequence(self, s: str, k: int) -> int:
        n = len(s)

        @cache
        def dfs(x, times):
            if x < 0:
                return 0 if times >= 0 else -inf

            return max(
                dfs(x - 1, times),
                dfs(x - 1, times - 1)
                + ...,  # how to check longest palindromic subsequence©leetcode
            )

        dfs(n-1, k)


# LingGod solution
class Solution:
    def longestPalindromicSubsequence(self, s: str, k: int) -> int:
        n = len(s)
        s = list(map(ord, s))

        @cache
        def dfs(i, j, t):
            if i > j:
                return 0
            if i == j:
                return 1

            # No picking any
            res = max(dfs(i + 1, j, t), dfs(i, j - 1, t))

            # Now try to do the operation
            op = abs(s[i] - s[j])
            op = min(op, 26 - op)  # since it is rounded
            if op <= t:
                res = max(res, dfs(i + 1, j - 1, t - op) + 2)
            return res

        ans = dfs(0, n - 1, k)
        dfs.cache_clear()
        return ans
