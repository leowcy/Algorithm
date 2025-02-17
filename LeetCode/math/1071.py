# 性质：两个字符串前后错位链接相等，就证明存在最大公约字符串，且长度为gcd两个字符串的长度。
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        l = gcd(len(str1), len(str2))
        c = str1[:l]
        if str1 + str2 == str2 + str1:
            return c
        return ""
