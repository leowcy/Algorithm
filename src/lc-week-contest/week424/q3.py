class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:

        n = len(nums)
        n_c = [0] * (n + 10)

        for i in range(n):
            n_c[i+1] = nums[i]

        def check(k) -> bool:
            q_c = [0] * (n + 10)

            for i in range(k):
                l, r, v = queries[i][0] + 1, queries[i][1] + 1, queries[i][2]
                q_c[l] += v
                q_c[r+1] -= v

            for i in range(1, n+1):
                q_c[i] += q_c[i-1]

            for i in range(1, n+1):
                if q_c[i] < n_c[i]:
                    return False
            return True
        
        l, r = 0, len(queries)

        while l < r:
            mid = (l + r) // 2
            if check(mid):
                r = mid
            else:
                l = mid + 1

        return r if check(r) else -1