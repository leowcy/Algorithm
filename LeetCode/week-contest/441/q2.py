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


class Solution_1:
    def solveQueries(self, nums: list[int], queries: list[int]) -> list[int]:
        d = defaultdict(list)
        for i, x in enumerate(nums):
            d[x].append(i)
        
        n = len(nums)
        for p in d.values():
            i0 = p[0]
            p.insert(0, p[-1] - n)
            p.append(i0 + n)
        
        for qi, i in enumerate(queries):
            p = d[nums[i]] 
            if len(p) == 3:
                queries[qi] = -1
            else:
                j = bisect_left(p, i)
                queries[qi] = min(i - p[j-1], p[j+1] - i)
        
        return queries

s = Solution()
# print(s.solveQueries([6, 12, 17, 9, 16, 7, 6], [5, 6, 0, 4]))

# print(s.solveQueries([12, 19, 12, 8, 12, 10], [0, 5, 3, 1]))

print(s.solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3]))
