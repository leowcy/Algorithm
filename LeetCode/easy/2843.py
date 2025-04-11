class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        ans = 0

        for i in range(low, high + 1):
            temp = str(i)
            n = len(temp)

            if n % 2 != 0:
                continue

            half = n // 2
            left = sum(int(temp[i]) for i in range(half))
            right = sum(int(temp[i]) for i in range(half, n))

            if left == right:
                ans += 1

        return ans
