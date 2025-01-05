### 替换空格
- 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

## 示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."

## Solution 1:
- use the string.replace() function in nodeJS and use the Regex of `/g` to replace all the match character
- Time Complexity: O(n) = n (length of string)
- Space Complexity: O(1)