class Solution:
    def fn(self, p, m, mid):
        cnt = 1
        prev = p[0]
        for i in range(1, len(p)):
            if p[i] - prev >= mid:
                cnt += 1
                prev = p[i]
        return cnt >= m


    def maxDistance(self, position: list[int], m: int) -> int:
        position.sort()

        lo = 1
        hi = position[-1] - position[0]

        # the reason plus 1 instead of h > l here is because imagine that now we only have two adjacent
        # number left. One is at l and the other is at h. If we do `h > l`, the loop will never end since
        # the l is always satisfied and it will always set l = mid. So leave one more space here, we have
        # found l is qualified and the other hi is not sure if it is qualified or not. When reach here,
        # we exit the loop. Return h if h is also qualified, that is a larger value comparing with l. If not,
        # return l. So that is the reason. 
        while hi > lo + 1: 
            mid = (lo + hi) // 2
            if self.fn(position, m, mid):
                lo = mid
            else:
                hi = mid - 1
        
        if self.fn(position, m, hi):
            return hi
        return lo