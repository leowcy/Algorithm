class Solution:
    def reverseParentheses(self, s: str) -> str:

        stack = []

        for each in s:
            if each == ")":
                temp = []
                while stack and stack[-1] != "(":
                    temp.append(stack.pop())
                # pop the "(" out
                stack.pop()
                stack.extend(temp)
            else:
                stack.append(each)

        return "".join(stack)