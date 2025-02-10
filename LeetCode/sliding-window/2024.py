class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        d = defaultdict(int)
        left = 0
        ans = 0

        for i, val in enumerate(answerKey):
            d[val] += 1

            while d["T"] > k and d["F"] > k:
                d[answerKey[left]] -= 1
                left += 1

            ans = max(ans, i - left + 1)

        return ans
