### 用两个栈实现队列
- 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

- 示例 1：
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]

- 示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]

## solution:
- First we will need to be clear on the Queue and Stack property. Queue: Fist in First out (FIFO) / Stack: Last in First out (LIFO)
- Use two stack to accomplish/build a queue
- For stack A -> simply push the element into it when doing the appendTail operation
- For stack B -> we will use it as the deleteHead operation. The logic is -> if B is not null -> Which means there is still some former head value inside ->
    simply pop it which will be qualified for the deleteHead. -> if B is null -> Check the stack A is null or not. If stack A is also null, it means that no
    element inside the array, so return -1 -> If stack A is not null -> pop element in stack A and push them to stack B. Return stackB.pop() value.
- Time Complexity: O(n) = O(1) -> Insert: O(1) -> DeleteHead: each element will be push or pop at most twice. So It will also be O(1).
- Space Complexity: O(n) = n -> Two stack for element which is O(2n) = O(n)