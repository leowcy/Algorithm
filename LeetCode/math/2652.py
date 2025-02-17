class Solution:
    def sumOfMultiples(self, n: int) -> int:
        helper = [0] * (n + 1)
        ans = 0

        for i in range(3, n + 1, 3):
            if helper[i] == 0:
                ans += i
                helper[i] = 1

        for i in range(5, n + 1, 5):
            if helper[i] == 0:
                ans += i
                helper[i] = 1

        for i in range(7, n + 1, 7):
            if helper[i] == 0:
                ans += i
                helper[i] = 1

        return ans


# 等差数列求和公式，(首+末) * 项数 // 2。然后遍历所有的3,5,7,15,21,35,105
class Solution:
    def sumOfMultiples(self, n: int) -> int:
        def f(m: int) -> int:
            return (m + n // m * m) * (n // m) // 2
        return f(3) + f(5) + f(7) - f(3 * 5) - f(3 * 7) - f(5 * 7) + f(3 * 5 * 7)
