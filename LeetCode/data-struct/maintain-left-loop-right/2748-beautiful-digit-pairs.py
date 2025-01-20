class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:
        ans = 0
        cnt = [0] * 10

        for each in nums:
            # pass value
            for y in range(1, 10):
                if gcd(each % 10, y) == 1:
                    ans += cnt[y]

            # update
            while each >= 10:
                each //= 10
            cnt[each] += 1

        return ans
