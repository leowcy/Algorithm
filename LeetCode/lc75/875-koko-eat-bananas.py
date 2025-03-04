# Classic binary search
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        n = len(piles)

        def check(x):
            ans = 0
            for each in piles:
                ans += (each + x - 1) // x
            return ans <= h

        left, right = 0, max(piles) + 1
        while left + 1 < right:
            mid = (left + right) // 2
            if check(mid):
                right = mid
            else:
                left = mid

        return right
