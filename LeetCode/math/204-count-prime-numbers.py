upper = 5 * (10**6)
cnt = [0] * (upper + 1)

for i in range(2, upper):
    if cnt[i] == 0:
        cnt[i] = cnt[i - 1] + 1
        for j in range(i * i, upper, i):
            cnt[j] = -1
    else:
        cnt[i] = cnt[i - 1]


# Key is - Have to put the pre-compute outside of the class Solution. Otherwise will timeout.
class Solution:
    def countPrimes(self, n: int) -> int:
        return cnt[n - 1] if n > 0 else 0
