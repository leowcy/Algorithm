class Solution:
    def maxPossibleScore(self, start: List[int], d: int) -> int:
        start.sort()

        def check(so):
            x = -inf
            for s in start:
                x = max(x + so, s)
                if x > s + d:
                    return False
            return True

        l, r = 0, (start[-1] + d - start[0]) // (len(start) - 1) + 1
        while l + 1 < r:
            mid = (l + r) // 2
            if check(mid):
                l = mid
            else:
                r = mid
        
        return l
