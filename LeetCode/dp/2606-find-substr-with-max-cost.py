class Solution:
    def maximumCostSubstring(self, s: str, chars: str, vals: List[int]) -> int:
        cnt = dict()
        for i, val in enumerate(chars):
            cnt[val] = vals[i]

        s_num_list = []
        for each in s:
            if each in chars:
                s_num_list.append(cnt[each])
            else:
                s_num_list.append(ord(each) - ord("a") + 1)

        n = len(s_num_list)
        dp = [0] * n
        dp[0] = s_num_list[0]
        for i in range(1, n):
            dp[i] = max(dp[i - 1] + s_num_list[i], s_num_list[i])

        return max(dp) if max(dp) > 0 else 0
