class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        n = len(cardPoints)
        if n == k:
            return sum(cardPoints)
        
        # all select from right for beginning
        t_sum = sum(cardPoints[-k:])

        ans = t_sum
        
        for in_, out in zip(cardPoints, cardPoints[-k:]):
            t_sum += in_ - out
            ans = max(ans, t_sum)

        return ans

