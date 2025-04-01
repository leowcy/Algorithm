class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)

        @cache
        def dfs(x):
            if x >= n:
                return 0

            return max(questions[x][0] + dfs(x + questions[x][1] + 1), dfs(x + 1))

        return dfs(0)


# Bottom up
class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)
        f = [0] * (n + 1)

        for i, (point, brainpower) in enumerate(questions):
            f[i + 1] = max(f[i + 1], f[i])  # 表示从上一次传来的，没选当前的
            j = min(i + brainpower + 1, n)  # 超过n的都算作n的最大值，最终用来返回
            f[j] = max(f[j], f[i] + point)  # 更新当前能到达的下一节点的最大值
        return f[n]
