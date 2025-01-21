class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        n = len(words)
        pre = [0] * (n + 1)
        vowels = ("a", "e", "i", "o", "u")
        for i, val in enumerate(words):
            if val[0] in vowels and val[-1] in vowels:
                pre[i + 1] = pre[i] + 1
            else:
                pre[i + 1] = pre[i]

        ans = []
        for i, j in queries:
            ans.append(pre[j + 1] - pre[i])

        return ans


# Use accumulate function
class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        s = list(
            accumulate((w[0] in "aeiou" and w[-1] in "aeiou" for w in words), initial=0)
        )

        return [s[j + 1] - s[i] for i, j in queries]
