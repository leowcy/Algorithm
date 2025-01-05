class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        n = len(nums)
        ans = float("-inf") # important here. Could be negative so couldn't init as zero. Otherwise the max() will return 0 instead of negative value.
        sum_of_nums = 0

        for i in range(n):
            # keep adding
            sum_of_nums += nums[i]

            # check if reach k-1 yet
            if i < k - 1:
                continue
            
            # reach length k now
            temp_ave = sum_of_nums / k
            ans = max(ans, temp_ave)

            # pop left from sum
            sum_of_nums -= nums[i + 1 - k]
        
        return ans
    
    def f(self, nums: List[int], k: int) -> float:
        ans = temp_sum = sum(nums[:k])

        for i in range(k, len(nums)):
            temp_sum = temp_sum - nums[i - k] + nums[i]
            ans = max(ans, temp_sum)
        
        return ans/k