class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort(reverse=True)
        times = len(piles) // 3
        ans = 0

        for t in range(times):
            ans += piles[t * 2 + 1]

        return ans
