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

        return dfs(m-1, nums)


# 写一下核心思路吧。首先在一个范围呢在queries，有一个val我们能加到对应的数位上。
# 然后把他们加起来，我们可以得到一个数位最多能减少的值，如果不能为0，说明是-1。
# 每个数位因此可以看成是独立的，单独对每个数位进行dp，看看将他降为0的最少次数，然后
# 横向对比所以数位的最大值，得到最少K。

class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:
        if all(x == 0 for x in nums):
            return 0
        
        f = [[True] + [False] * x for x in nums]

        for k, (l, r, val) in enumerate(queries):
            for i in range(l, r+1):
                for j in range(nums[i], val - 1, -1):
                    f[i][j] = f[i][j] or f[i][j-val]
                if all(fi[-1] for fi in f):
                    return k + 1
        
        return -1