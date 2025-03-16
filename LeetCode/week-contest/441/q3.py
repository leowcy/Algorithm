# Incomplete
class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:
        n = len(nums)
        m = len(queries)

        @cache
        def dfs(x, temp_nums):
            if sum(temp_nums) == 0:
                return 0

            i, j, v = queries(x)
            for idx in range(i, j+1):
                temp_nums[idx] 

        return dfs(m-1, nums)©leetcode