class Solution:
    def tupleSameProduct(self, nums: List[int]) -> int:
        n = len(nums)
        p = Counter()

        for i in range(n):
            for j in range(i+1, n):
                t = nums[i] * nums[j]
                p[t] += 1

        ans = 0
        for each in p.values():
            if each >= 2:
                ans += each * (each-1) // 2
        
        return ans * 8