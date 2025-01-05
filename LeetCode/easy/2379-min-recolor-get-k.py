class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        n = len(blocks)

        ans = 0
        f = blocks[:k]
        for each in f:
            if each == "W":
                ans += 1
            
        temp = ans
        
        for i in range(k, n):
            if blocks[i] == "W":
                temp += 1
            if blocks[i-k] == "W":
                temp -= 1
            ans = min(temp, ans)
        return ans