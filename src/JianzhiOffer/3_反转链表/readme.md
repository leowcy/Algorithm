### 从尾到头打印链表
- 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

- 示例 1：
- 输入：head = [1,3,2]
- 输出：[2,3,1]

## solution 1: (Array)
- Keep moving the node to the next when reach the last node of the list. While moving, keep track of the value and push it into an array.
- When reach the last node, push its value into the array as well.
- Now we have built an array with the value of each node from beginning to the end.
- Reserve it and we will get the array we want.
- Time Complexity: O(n) = n
- Space Complexity: O(n) -> Create a new Array of n length to store the value

## solution 2: (Stack)
- Keep moving the node to the next when reach the last node of the list. While moving, keep track of the value and push it into an array.
- When reach the last node, push its value into the array as well.
- Now we have built an array with the value of each node from beginning to the end.
- Instead of reverse the result array, we can use array.pop() to pop all the element back.
- Time Complexity: O(n) = n
- Space Complexity: O(n) -> Create a new Array of n length to store the value. Create anther array to store the pop value. 2n = n.