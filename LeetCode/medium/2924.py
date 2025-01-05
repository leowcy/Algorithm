class Solution:
    def findChampion(self, n: int, edges: List[List[int]]) -> int:
        isUndefeated = [True] * n
        
        for w, l in edges:
            isUndefeated[l] = False
        
        ans = -1
        ansCount = 0

        for team in range(n):
            if isUndefeated[team]:
                ans = team
                ansCount += 1
        
        return ans if ansCount == 1 else -1