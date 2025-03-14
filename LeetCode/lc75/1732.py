class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        ans, cur = 0, 0
        for each in gain:
            cur += each
            ans = max(ans, cur)
        return ans
