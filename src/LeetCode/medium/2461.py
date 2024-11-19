class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        ans = temp_sum = 0

        temp_sum = sum(nums[:k-1])
        count = Counter(nums[:k-1])

        for i in range(k-1, n):
            # keep adding
            temp_sum += nums[i]
            count[nums[i]] += 1

            # check if qualify
            if len(count) == k:
                ans = max(ans, temp_sum)
            
            # pop value
            temp_sum -= nums[i-k+1]
            count[nums[i-k+1]] -= 1
            if count[nums[i-k+1]] == 0:
                del count[nums[i-k+1]]
        
        return ans


# with zip
class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        ans = temp_sum = 0

        temp_sum = sum(nums[:k-1])
        count = Counter(nums[:k-1])

        for out, in_ in zip(nums, nums[k-1:]):
            temp_sum += in_
            count[in_] += 1

            if len(count) == k:
                ans = max(ans, temp_sum)
            
            temp_sum -= out
            count[out] -= 1
            if count[out] == 0:
                del count[out] 
        
        return ans