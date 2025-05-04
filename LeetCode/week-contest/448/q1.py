class Solution:
    def maxProduct(self, n: int) -> int:
        a, b = 0, 0
        for each in str(n):
            each = int(each)
            if each > a:
                if a > b:
                    b = a
                a = each
            elif each > b:
                b = each

        return a*b