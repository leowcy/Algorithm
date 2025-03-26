class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        helper = []

        for row in grid:
            for each in row:
                helper.append(each)

        helper.sort()

        n = len(helper)

        f = helper[n // 2]

        res = 0

        for each in helper:
            if each % x != f % x:
                return -1

            res += abs(f - each) // x

        return res
