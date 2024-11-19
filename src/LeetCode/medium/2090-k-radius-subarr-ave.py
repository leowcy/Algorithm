class Solution:
    # Solution 1: time exceed
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        # pre-check
        if k == 0:
            return nums
        
        n = len(nums)
        if n % 2 == 1:
            if k > n//2:
                return [-1] * n
        else:
            if k >= n/2:
                return [-1] * n
        
        # initialize
        ans = [-1] * n

        for i in range(k, n-k):
            ans[i] = sum(nums[i-k:i+k+1]) // (2*k + 1)
        
        return ans

    # S2:
    def getAverages_2(self, nums: List[int], k: int) -> List[int]:
        # pre-check
        if k == 0:
            return nums
        
        n = len(nums)
        if n % 2 == 1:
            if k > n//2:
                return [-1] * n
        else:
            if k >= n/2:
                return [-1] * n
        
        # initialize
        ans = [-1] * n
        first_valid_sum = sum(nums[:2*k+1])
        ans[k] = first_valid_sum // (k*2+1)
        for i in range(k+1, n-k):
            first_valid_sum = first_valid_sum - nums[i-k-1] + nums[i+k]
            ans[i] = first_valid_sum // (k*2+1)
        
        return ans

        
