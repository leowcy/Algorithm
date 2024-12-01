class Solution:
    def minArraySum(self, nums: List[int], k: int, op1: int, op2: int) -> int:
        n = len(nums)
        ans = sum(nums)

        print(ans)

        nums.sort()

        while op1 > 0:
            nums[-1] = (nums[-1] + 1) // 2
            ans -= nums[-1] - 1
            op1 -= 1
            nums.sort()

        print(ans)

        # for op2, sum reduce can be count
        for each in nums:
            if each >= k and op2 > 0:
                ans -= k
                op2 -= 1

        return ans