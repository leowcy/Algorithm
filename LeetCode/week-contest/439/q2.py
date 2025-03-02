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

