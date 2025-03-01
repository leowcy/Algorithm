class Solution:
    def calcEquation(
        self, equations: List[List[str]], values: List[float], queries: List[List[str]]
    ) -> List[float]:
        # build graph
        graph = dict()
        for (s, e), v in zip(equations, values):
            if s not in graph:
                graph[s] = {s: 1.0}
            if e not in graph:
                graph[e] = {e: 1.0}
            graph[s][e] = v
            graph[e][s] = 1 / v
        
        # dfs here to check if there is one related
        def dfs(cur, t, a, v):
            if cur == t:
                return a
            if cur in v:
                return -1.0
            v.add(cur)
            for nxt, val in graph[cur].items():
                found = dfs(nxt, t, a * val, v)
                if found != -1.0:
                    return found
            return -1.0

        # loop query to get answer
        ans = []
        for s, e in queries:
            if s not in graph or e not in graph:
                ans.append(-1.0)
            else:
                ans.append(dfs(s, e, 1, set()))
        return ans
