class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:

        def check(x):
            cnt = 0
            for i in range(1, m + 1):
                cnt += min(x // i, n)
            return cnt >= k

        left = 0
        right = m * n + 1
        while left + 1 < right:
            mid = (left + right) // 2
            if check(mid):
                right = mid
            else:
                left = mid

        return right
