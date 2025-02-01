class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        nums.sort()
        ans = sum(nums)
        while k > 0:
            ans -= nums[0] * 2
            nums[0] = -nums[0]
            nums.sort()
            k -= 1

        return ans


class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        cnt = Counter(nums)
        ans = sum(nums)
        for i in range(-100, 101):
            while cnt[i] > 0:
                if k == 0:
                    return ans
                if i < 0:
                    ans += (-i) * 2
                    k -= 1
                    cnt[i] -= 1
                    cnt[-i] += 1
                elif i == 0:
                    return ans
                else:
                    if k % 2 == 0:
                        return ans
                    else:
                        ans -= i * 2
                        return ans

        return ans
