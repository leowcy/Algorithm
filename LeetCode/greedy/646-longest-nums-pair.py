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


# 2nd time
class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda x: x[1])
        ans = 1
        cur = pairs[0][1]
        temp = 1

        for i in range(1, len(pairs)):
            if cur >= pairs[i][0]:
                continue
            temp += 1
            cur = pairs[i][1]
            ans = max(ans, temp)

        return ans
