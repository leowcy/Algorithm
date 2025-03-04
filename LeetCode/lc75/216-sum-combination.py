class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        ans = []
        path = []

        def dfs(num, t):
            d = k - len(path) # calculate the remaining lenght needed
            if t < 0 or t > (num + num - d + 1) * d // 2:
                return
            if d == 0: # 0 means we found a array. No need to check if sum equal to n. Reason is that in line 8.
                ans.append(path.copy())
                return

            for j in range(num, 0, -1):
                path.append(j)
                dfs(j - 1, t - j)
                path.pop()

        dfs(9, n)
        return ans
