class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []
        path = [""] * (2 * n)

        def dfs(idx, left):
            if idx == 2 * n:
                ans.append("".join(path))
                return
            if left < n: # left count lesser than n
                path[idx] = "("
                dfs(idx + 1, left + 1)
            if idx - left < left: # right count lesser than left count
                path[idx] = ")"
                dfs(idx + 1, left)

        dfs(0, 0)
        return ans
