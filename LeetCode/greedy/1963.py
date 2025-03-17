class Solution:
    def minSwaps(self, s: str) -> int:
        ans = c = 0
        for b in s:
            if b == "[":
                c += 1
            elif c > 0:
                c -= 1
            else:
                ans += 1
                c += 1
        return ans
