### 第一个出现一次的字符

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:
s = "abaccdeff"
返回 "b"

s = ""
返回 " "

## 解法1：哈希表存储索引
- Loop the string once and init the hash map with the corresponding value
- For the second loop - check the hash map for those element occur once
- Time complexity: O(n) = n
- Space complexity: O(n) = 1 (because only 26 small case alphabet) - so we can say for constant time