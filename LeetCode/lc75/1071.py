class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        m, n, i, j = len(str1), len(str2), 0, 0

        def valid(x):
            if m % x or n % x:
                return False

            n1, n2 = m // x, n // x
            base = str1[:x]
            return str1 == n1 * base and str2 == n2 * base

        for i in range(min(m, n), 0, -1):
            if valid(i):
                return str1[:i]

        return ""


# Math solution
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        g = gcd(len(str1), len(str2))
        if str1 + str2 == str2 + str1:
            return str1[:g]
        return ""
