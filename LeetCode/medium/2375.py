class Solution:
    def smallestNumber(self, pattern: str) -> str:
        n = len(pattern)
        ans = [0] * (n+1)

        suf = [0] * n
        d_count = 0
        for i in range(n-1, -1, -1):
            if pattern[i] == "D":
                d_count += 1
            else:
                d_count = 0
            suf[i] = d_count

        nums = [i for i in range(1, 10)]
        idx = 0
        while idx < n:
            cur = min(nums)
            if pattern[idx] == "I":
                ans[idx] = cur
                nums.remove(cur)
            else:
                d_count = suf[idx]
                ans[idx] = cur + d_count
                nums.remove(cur + d_count)
            idx += 1
        ans[-1] = nums[0]

        return "".join(map(str, ans))