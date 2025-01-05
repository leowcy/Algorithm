class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        if k == 1:
            return 1
        if k == m * n:
            return m * n
        
        def check(x) -> bool:
            cnt = 0
            for i in range(1, m + 1):
                cnt += min(x // i, n)
            return cnt >= k

        l = 0
        r = m * n

        while l + 1 < r:
            mid = (l + r) // 2
            if check(mid):
                r = mid
            else:
                l = mid

        return r


# difficult point is at check(x) function. Below, count each column, how many number is smaller than the
# target number by divide the int from [1, m] and pick the min(x // i, n) since there is not always has n length. So can only pick the min number.
# m=5, n=4: 5 x 4 multiplication table

#    1  2  3  4  5
# 1  1  2  3  4  5
# 2  2  4  6  8  10       [ 1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 8, 8, 9, 10, 12, 12, 15, 16, 20 ]
# 3  3  6  9  12 15                                                   ^
# 4  4  8  12 16 20                                                   |
#    v  v  v  v  v                                                    |
#    4  4  3  2  2  --> 15  -------------------------------------------