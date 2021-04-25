### 二叉搜索树与双向链表

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

为了让您更好地理解问题，以下面的二叉搜索树为例：
我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。
下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。
特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

## solution: Inorder Traversal + DFS

- For Binary search tree, we know the leftChild < parent < rightChild. In order to find the head, we will need the inorder traversal to find the Head(smallest leaf node)
- For the case on left/right, we can think of recursion call to complete it
- First we will need to move the node to the leftest/smallest node and set the head to it
- Second, we will need to process the data after reaching the leftest. For inorder traversal, the rule is:

```
dfs(node.left)
//process data
dfs(node.right)
```

- Thirdly, if there is no child node parameter in the recursion dfs() call, we will see it as the smallest node. Then we can only set the node(parent).leftChild = null -> move the leftChild node to node(parent). If there is left childNode parameter in dfs(), we can set the leftChild.right = node(parent). And still, we can set the node(parent).leftChild = leftChild
- After processing with all the nodes, there are two things left. For the leftest/small node, we set its leftChild to null at the very first beginning. So as requirement, we will need to set leftestNode.left = tail. So as tail and we will need to set tail.rightNode = leftestNode. In order to do this, we have save the head node already. For the tail node, in our dfs function, the last cur value now is the tail node. In that case, it is simple. -> head.left = cur && cur.right = head; -> return head at the end.
- Time Complexity: O(n) = n -> dfs call will need to inorder traversal all the nodes.
- Space Complexity: O(n) = n -> the space complexity of tree is the height. When tree degenerates into linked list -> the height will also be n.
