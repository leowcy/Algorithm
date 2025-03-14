# Binary search - time exceed
class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        if sum(candies) < k:
            return 0

        n = len(candies)

        def check(x, temp):
            for each in candies:
                while each >= x:
                    temp -= 1
                    each -= x

            return temp <= 0

        mn = 0
        mx = max(candies) + 1
        while mn + 1 < mx:
            mid = (mn + mx) // 2
            if check(mid, k):
                mn = mid
            else:
                mx = mid

        return mn


# Optimize the check function a bit. Passed - Beat 35%
class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        if sum(candies) < k:
            return 0

        n = len(candies)

        def check(x, temp):
            for each in candies:
                temp -= each // x
                if temp <= 0:
                    return True
            return False

        mn = 0
        mx = max(candies) + 1
        while mn + 1 < mx:
            mid = (mn + mx) // 2
            if check(mid, k):
                mn = mid
            else:
                mx = mid

        return mn


# Beat 72% - remove the if condition
class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        if sum(candies) < k:
            return 0

        n = len(candies)

        def check(x):
            temp = 0
            for each in candies:
                temp += each // x
            return temp >= k

        mn = 0
        mx = max(candies) + 1
        while mn + 1 < mx:
            mid = (mn + mx) // 2
            if check(mid):
                mn = mid
            else:
                mx = mid

        return mn
