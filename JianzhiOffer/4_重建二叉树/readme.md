### 重建二叉树
- 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
- 例如，给出前序遍历 preorder = [3,9,20,15,7], 中序遍历 inorder = [9,3,15,20,7], 返回如下的二叉树：
    3
   / \
  9  20
    /  \
   15   7

## 插入一些树的知识
- 前序遍历：根结点 ---> 左子树 ---> 右子树
- 中序遍历：左子树---> 根结点 ---> 右子树
- 后序遍历：左子树 ---> 右子树 ---> 根结点
- 层次遍历：只需按层次遍历即可

## Solution:
- Recursion -> The first element in the preorder must be root. Then find the index of root inside the inorder array ->
    the left part of the inorder array is the left tree node / right part of the inorder array is the right tree node ->
    recursively call the function for left and right part and set them as root.left and root.right.
- Time Complexity: O(n) = n (n is the total number of node in the tree)
- Space Complexity: O(n) = O(n) + O(h) = O(n) -> h < n so the result is O(n) -> the first O(n) is the space for the return tree object ->
    the O(h) is the height of the tree which will be used for recursion call.