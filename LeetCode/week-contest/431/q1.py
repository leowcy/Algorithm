class Solution:
    def maxLength(self, nums: List[int]) -> int:
        n = len(nums)
        ans = 1

        for i in range(n - 1):
            gcd = lcm = prod = nums[i]
            for j in range(i + 1, n):
                gcd = math.gcd(nums[j], gcd)
                lcm = math.lcm(nums[j], lcm)
                prod *= nums[j]
                if prod == gcd * lcm:
                    ans = max(ans, j - i + 1)
                else:
                    break

        return ans
