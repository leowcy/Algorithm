class Solution:
    def maxSum(self, nums: list[int], m: int, k: int) -> int:
        n = len(nums)
        ans = 0
        # init to k-2 place
        temp = sum(nums[:k-1])
        c = Counter(nums[:k-1])
        
        for out, in_ in zip(nums, nums[k-1:]): # both start from the first element in zip objects
            temp += in_
            c[in_] += 1
            if len(c) >= m:
                ans = max(ans, temp)
            
            temp -= out
            c[out] -= 1
            if c[out] == 0:
                del c[out]
        
        return ans