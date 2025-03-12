# Brute force - O(n ** 4) - time exceed
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        n = len(nums)
        ans = []

        for i in range(n):
            for j in range(i + 1, n):
                for x in range(j + 1, n):
                    for y in range(x + 1, n):
                        if nums[i] + nums[j] + nums[x] + nums[y] == target:
                            cur = [nums[i], nums[j], nums[x], nums[y]]
                            if cur not in ans:
                                ans.append(cur)

        return ans


