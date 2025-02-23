class Solution:
    def hasSameDigits(self, s: str) -> bool:
        while len(s) > 2:
            temp = []
            for x, y in pairwise(s):
                new_digit = (int(x) + int(y)) % 10
                temp.append(str(new_digit))
            s = "".join(temp)
        return s[0] == s[1]
