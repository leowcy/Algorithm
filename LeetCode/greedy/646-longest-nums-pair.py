class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda x: x[1])
        ans = 0
        temp = -inf
        for i, j in pairs:
            if temp < i:
                temp = j
                ans += 1
        return ans
