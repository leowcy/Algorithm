class Solution:
    def maxSum(self, grid: List[List[int]], limits: List[int], k: int) -> int:
        m, n = len(grid), len(grid[0])

        helper = []

        for i in range(m):
            if limits[i] == 0:
                continue
            for j in range(n):
                helper.append({grid[i][j]: str(i) + "-" + str(j)})

        helper = sorted(helper, key=lambda d: list(d.keys())[0], reverse=True)
        ans = 0
        idx = 0
        while k > 0 and idx < len(helper):
            val, p = next(iter(helper[idx].items()))
            l_idx = int(p.split("-")[0])
            if limits[l_idx] > 0:
                ans += val
                limits[l_idx] -= 1
                k -= 1
            idx += 1

        return ans
