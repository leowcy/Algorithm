class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        if k == 0:
            return [0] * n
        
        # create a better ans for easy calculation
        t = code * 3

        ans = [0] * n

        for i in range(n, 2*n):
            if k > 0:
                ans[i % n] = sum(t[i+1:i+1+k])
            else:
                ans[i % n] = sum(t[i+k:i])

        return ans 

# beat: 100%