### 链表中倒数第 k 个节点

输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

示例：
给定一个链表: 1->2->3->4->5, 和 k = 2.
返回链表 4->5.

## solution 1:

- Get the length of list node first.
- Then we can calculate to get the index of the last K.
- Loop the list again and stop at the right index.
- Time Complexity: O(n) = n -> n is the length of the linked list. Actually we need to loop it twice so it should be 2\*n so it is n.
- Space Complexity: O(n) = 1 -> No extra space needed

## solution 2:

- Create a map to store the index and node while loop the linked list.
- Once the loop is done, we will have a map for each step (index, node).
- Simple calculation the index of the last K and use map.get(index) to be the return value.
- Time Complexity: O(n) = n -> One time loop
- Space Complexity: O(n) = n -> there is a length of n Map needed to store the each node.

# solution 3: double link

- create two link starting from head
- let the fast pointer move k steps first
- then fast and slow pointer move together until the fast one reach the end of the linked list
- return slow
- TC: O(n) = n
- SC: O(n) = 1