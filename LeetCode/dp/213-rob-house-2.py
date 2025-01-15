class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)

        def rob_helper(new_n):
            f0 = f1 = 0
            for x in new_n:
                f0, f1 = f1, max(f1, f0 + x)
            return f1

        return max(rob_helper(nums[1:]), rob_helper(nums[2:-1]) + nums[0])
