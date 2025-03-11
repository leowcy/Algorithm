class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        n = len(word)

        def helper(x):
            d = defaultdict(int)
            left, c_count = 0, 0
            ans = 0
            for i, val in enumerate(word):
                if val in "aeiou":
                    d[val] += 1
                else:
                    c_count += 1

                while len(d) == 5 and c_count >= x:
                    if word[left] in "aeiou":
                        d[word[left]] -= 1
                        if d[word[left]] == 0:
                            del d[word[left]]
                    else:
                        c_count -= 1
                    left += 1

                ans += left # key is here. Why plus left? Because right is fixed. Then left is all possible combination to be add as a substr.
            return ans

        res_1 = helper(k)
        res_2 = helper(k + 1)
        return res_1 - res_2
