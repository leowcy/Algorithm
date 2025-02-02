class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        n = len(arr)
        cnt = Counter(arr)
        f = [0] * (n + 1)
        for i, val in cnt.items():
            f[val] += 1

        target = n // 2
        ans = 0
        for i in range(n, 0, -1):
            while f[i] > 0:
                ans += 1
                if i >= target:
                    return ans
                target -= i
                f[i] -= 1

        return ans
