class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[1])
        ans = 0
        temp = -inf
        for x, y in intervals:
            if temp <= x:
                temp = y
                continue
            ans += 1

        return ans
