class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        n = len(nums)
        d = defaultdict(int)

        for i in range(n - 1, -1, -1):
            d[nums[i]] += 1
            if d[nums[i]] > 1:
                return (i + 3) // 3

        return 0
