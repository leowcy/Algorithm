# Time limit exceeded
from collections import defaultdict

class Solution:
    def solveQueries(self, nums: list[int], queries: list[int]) -> list[int]:
        n = len(queries)
        m = len(nums)
        ans = []
        d = defaultdict(list)
        helper = [float("inf")] * (m)

        for i, val in enumerate(nums):
            if len(d[val]) > 0:
                for j, v in enumerate(d[val]):
                    helper[i] = min(
                        helper[i],
                        abs(i - v),
                        min(i, v) + m - max(i, v)
                    )
                    helper[v] = min(
                        helper[v],
                        abs(i - v),
                        min(i, v) + m - max(i, v)
                    )
                d[val].append(i)
            else:
                d[val] = [i]

        # print(d)
        # print(helper)

        for each in queries:
            ans.append(helper[each] if helper[each] < float("inf") else -1)

        return ans


s = Solution()
# print(s.solveQueries([6, 12, 17, 9, 16, 7, 6], [5, 6, 0, 4]))

# print(s.solveQueries([12, 19, 12, 8, 12, 10], [0, 5, 3, 1]))

print(s.solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3]))
