### 包含 min 的函数栈

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min(); --> 返回 -3.
minStack.pop();
minStack.top(); --> 返回 0.
minStack.min(); --> 返回 -2.

提示：
各函数的调用总次数不超过 20000 次

## solution:
- Check the comments in the main.js code
- TC: O(n) = 1 -> As required
- SC: O(n) = n -> A min_stack stack is created to help to recode the min value of each step