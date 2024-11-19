class Solution:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        n = len(nums)
        ans = [0] * (n - k + 1)

        for i in range(n - k + 1):
            cur = nums[i: i + k]
            cur.sort()
            target = cur[x-1]
            if target < 0:
                ans[i] = target

        return ans
    
    # Brute force - time exceed


class Solution:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        n = len(nums)

        cnt = [0] * 101
        for num in nums[:k-1]:
            cnt[num] += 1
        
        ans = [0] * (n-k+1)

        for i, (in_, out) in enumerate(zip(nums[k-1:], nums)):
            cnt[in_] += 1
            left = x

            for j in range(-50, 0): # condition range is (-50, 50). So searching from -50 here as brute force.
                left -= cnt[j]
                if left <= 0:
                    ans[i] = j
                    break
            
            cnt[out] -= 1
        
        return ans