class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        ans = []
        i = 0
        for each in spaces:
            ans.append(s[i:each])
            i = each
        
        ans.append(s[i:])
       
        return " ".join(ans)