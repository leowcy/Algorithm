# Solution 1: DP bot -> top - beat 90%
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n, m = len(text1), len(text2)

        dp = [[0] * (m+1) for _ in range(n+1)]

        for i, x in enumerate(text1):
            for j, y in enumerate(text2):
                if x == y:
                    dp[i+1][j+1] = dp[i][j] + 1
                else:
                    dp[i+1][j+1] = max(dp[i][j+1], dp[i+1][j])
        
        return dp[n][m]


# Solution 2: DP top -> bot + cache - Beat 19.42%
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n, m = len(text1), len(text2)

        @cache
        def dp(i, j):
            if i < 0 or j < 0:
                return 0

            if text1[i] == text2[j]:
                return dp(i-1, j-1) + 1
            
            return max(dp(i, j-1), dp(i-1, j))
        
        return dp(n-1, m-1)