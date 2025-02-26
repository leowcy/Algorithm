### 第一个出现一次的字符

# 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

# 示例:
# s = "abaccdeff"
# 返回 "b"

# s = ""
# 返回 " "

# Use counter map
# O(n) time - O(n) space
def find_char(input: str):
    import collections
    c = collections.Counter(input)
    for each in input:
        if c[each] == 1:
            return each
    return " "

print(find_char("abbaccddeeff"))