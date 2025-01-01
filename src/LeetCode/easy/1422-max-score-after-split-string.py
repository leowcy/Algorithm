class Solution:
    def maxScore(self, s: str) -> int:
        ans = 0
        s_count = Counter(s)
        ones = s_count["1"]
        prev = 0

        for i in range(len(s) - 1):
            if s[i] == "0":
                prev += 1
            else:
                ones -= 1

            ans = max(ans, prev + ones)

        return ans
