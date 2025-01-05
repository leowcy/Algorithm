MOD = 10 ** 9 + 7
f = [1,1,2,4]
g = [1,1,2,4] # for 0th index 1 here -> press 4 times for number 7/9, only will have one result

for _ in range(10 ** 5 - 3):
    f.append((f[-1] + f[-2] + f[-3]) % MOD)
    g.append((g[-1] + g[-2] + g[-3] + g[-4]) % MOD)

class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        ans = 1
        for ch, s in groupby(pressedKeys):
            m = len(list(s))
            ans = ans * (g[m] if ch in "79" else f[m]) % MOD

        return ans