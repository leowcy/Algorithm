class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        nums.sort()
        n = len(nums)
        from_ = [-1] * n

        @cache
        def dfs(i):
            res = 0
            for j in range(i):
                if nums[i] % nums[j]:
                    continue
                f = dfs(j)
                if f > res:
                    res = f
                    from_[i] = j
            return res + 1

        max_f = max_i = 0
        for i in range(n):
            f = dfs(i)
            if f > max_f:
                max_f = f
                max_i = i

        path = []
        i = max_i
        while i >= 0:
            path.append(nums[i])
            i = from_[i]
        return path
