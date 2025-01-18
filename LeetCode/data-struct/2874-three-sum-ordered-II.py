# We take possible J as a loop example and calculate the best sum we can get.
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        ans = 0
        n = len(nums)
        suf_max = [0] * (n+1)

        # Use surfix max to keep track the biggest element at a position
        for i in range(n-1, 1, -1):
            suf_max[i] = max(suf_max[i+1], nums[i])

        # init with nums[0]
        pre_fix = max(0, nums[0])
        for i in range(1, n-1):
            ans = max(ans, (pre_fix - nums[i]) * suf_max[i+1])
            pre_fix = max(pre_fix, nums[i])  # keep updating prefix max value

        return ans


# Another solution we can take every possible K and also calculate the best sum we can get.
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        ans = 0
        max_diff = pre_max = 0

        for x in nums:
            ans = max(ans, max_diff * x) # update ans
            max_diff = max(max_diff, pre_max - x) # max diff represent the max different happening before x. If none, will fall to default 0.
            pre_max = max(pre_max, x) # maintain a maximum number

        return ans
