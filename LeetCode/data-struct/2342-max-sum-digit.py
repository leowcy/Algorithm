class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        ans = -1
        d_dict = defaultdict(int)

        for i, val in enumerate(nums):
            # temp = sum(map(int, str(val)))
            # s = sum(map(int, str(num)))
            # 不转成 str，效率更高
            temp = 0
            x = val
            while x:  # 枚举 num 的每个数位
                temp += x % 10
                x //= 10
            if d_dict[temp] > 0:
                ans = max(ans, d_dict[temp] + val)
            d_dict[temp] = max(d_dict[temp], val)

        return ans
