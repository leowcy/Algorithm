import math
import collections

class Solution:
    def minimumIncrements(self, nums: list[int], target: list[int]) -> int:
        nums.sort()
        ans = 0
        cnt = collections.Counter(nums)

        for val in set(target):
            has_target_number = False
            to_add = float("inf")
            t = 0
            for each in nums:
                if each % val == 0:
                    has_target_number = True
                    t = each
                    break
                else:
                    to_add = min(to_add, val - each % val)
                    t = val
            if has_target_number:
                cnt[t] -= 1
                continue
            ans += to_add
            cnt[t + to_add] += 1

        return ans


s = Solution()
# print(s.minimumIncrements([4, 9], [5, 3, 3]))
print(s.minimumIncrements([8, 10, 9], [10, 6, 6]))
# print(s.minimumIncrements([8, 4], [10, 5]))
