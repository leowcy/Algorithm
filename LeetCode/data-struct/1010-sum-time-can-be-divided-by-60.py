# constrain is time[i] <= 500, so I use 500 * 2 // 60 ~ 17. So loop 17 times. Beat 5%
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        n = len(time)
        ans = 0

        for i in range(1, 18):
            temp = 60 * i
            d_dict = defaultdict(int)
            for j, val in enumerate(time):
                if val < temp:
                    if d_dict[temp - val]:
                        ans += d_dict[temp - val]
                    d_dict[val] += 1

        return ans


# Use math mod thinking - beat 71%
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        n = len(time)
        ans = 0

        cnt = [0] * 60

        for t in time:
            ans += cnt[(60 - t % 60) % 60]
            cnt[t % 60] += 1

        return ans
