class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)

        @cache
        def dfs(x):
            if x < 0:
                return True

            for word in wordDict:
                if s[x - len(word) + 1 : x + 1] == word and dfs(x - len(word)):
                    return True

            return False

        return dfs(n - 1)
