### 序列化二叉树
请实现两个函数，分别用来序列化和反序列化二叉树。

示例: 

你可以将以下二叉树：
```
    1
   / \
  2   3
     / \
    4   5
```
序列化为 "[1,2,3,null,null,4,5]"

## solution: DFS - preOrder: Root - left - right
- The key for this question is that we will need to store the null value for the root's child. In that case, we can reverse it back.
- The for the serialize it will become simple. In preOrder traversal Root-Left-Right, we will handle the root at the very beginning. Then call the root.left and root.right recursively.
- At the end we will add root+left+right value and construct them into a string.

- For the deserialize function, we will need to split by comma first. Then we will create a buildTree function. Shift the first element from the array, if the symbol is "X", return null.
- Else, if not null, create a new TreeNode(). And then pop the root.left and root.right. If the root.left and right are null, it is also acceptable. Return root.
- At the end, we will get and reach the top root. So return the root.

- Time Complexity: O(n) = 2n + 1 (Including those null leaf child) = n - PreOrder to traversal all the nodes.
- Space Complexity: O(n) = (n + 1)/2 = n - When tree degenerate into linked list.