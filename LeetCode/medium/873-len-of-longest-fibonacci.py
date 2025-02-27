# Beat 75% - O(n^2) time.
class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        n = len(arr)
        s = set(arr)
        ans = 0

        for i in range(n):
            for j in range(i + 1, n):
                prev = arr[j]
                nxt = arr[i] + prev
                temp = 2
                while nxt in s:
                    temp += 1
                    ans = max(ans, temp)
                    prev, nxt = nxt, prev + nxt

        return ans
