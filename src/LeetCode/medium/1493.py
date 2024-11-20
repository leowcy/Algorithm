class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)

        def _find(mid: int) -> bool:
            cnt = Counter()
            left = 0
            for right, val in enumerate(nums):
                cnt[val] += 1
                
                if right == left + mid:
                    if cnt[1] >= mid:
                        return True
                    # pop left
                    cnt[nums[left]] -= 1
                    left += 1

            return False

        l = -1
        r = n
        while l + 1 < r:
            mid = (l + r) // 2
            if _find(mid):
                l = mid
            else:
                r = mid
        
        return l if l > -1 else -1


# Solution 2: Sliding window - keep track of the occ of 0
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        ans = left = 0
        cnt = Counter()

        for right, val in enumerate(nums):
            cnt[val] += 1

            while cnt[0] > 1:
                cnt[nums[left]] -= 1
                left += 1
            
            ans = max(ans, right - left) # right minus left here means at least remove one element
        
        return ans