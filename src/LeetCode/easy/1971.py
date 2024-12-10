# Solution 1:
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        def dfs(i):
            if i == destination:
                return True
            
            vis.add(i)

            for j in g[i]:
                if j not in vis and dfs(j):
                    return True
            
            return False
        

        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        vis = set()
        return dfs(source)


# Solution 2:
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        def find(x):
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        p = list(range(n))
        for u, v in edges:
            p[find(u)] = find(v)
        return find(source) == find(destination)