class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if n == 1:
            return 0

        ans = 0
        d = defaultdict(int)

        for i, val in enumerate(nums):
            if val >= k:
                continue

            temp = k - val
            if d[temp]:
                ans += 1
                d[temp] -= 1
            else:
                d[val] += 1

        return ans
