class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        ans = float('inf')
        for left in range(len(nums)):
            temp = 0
            for right in range(left, len(nums)):
                temp += nums[right]
                len_temp = right - left + 1
                if len_temp < l:
                    continue
                elif len_temp <= r:
                    if temp > 0:
                        ans = min(ans, temp)
                else:
                    break

        return ans if ans < float('inf') else -1
    
    # AC!