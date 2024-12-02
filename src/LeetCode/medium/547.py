# Solution 1: DFS
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        
        def dfs(x):
            for j in range(n):
                if isConnected[x][j] == 1 and j not in visited:
                    visited.add(j)
                    dfs(j)

        n = len(isConnected)
        visited = set()
        ans = 0

        for i in range(n):
            if i not in visited:
                dfs(i)
                ans += 1
        
        return ans


# Solution 2: BFS
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:

        n = len(isConnected)
        visited = set()
        ans = 0

        for i in range(n):
            if i not in visited:
                Q = deque([i])
                while Q:
                    j = Q.popleft()
                    visited.add(j)
                    for k in range(n):
                        if isConnected[j][k] == 1 and k not in visited:
                            Q.append(k)
                ans += 1
        
        return ans