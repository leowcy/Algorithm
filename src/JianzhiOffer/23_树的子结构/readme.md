### 树的子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true

## solution:
- Two recursion call is needed here. The first one is to find the root node of B in tree A.
- Once the root node is found, we will check if the sub structure is the same or not. That is what isRootSame() function do.
- Inside the isRootSame() function -> if no B, return tree. We don't need B as mandatory. -> If no A, return false. This means that we are trying to compare B with A which does not has such leaf node. So return false. -> If A.val and B.val is not the same, return false. -> If all match, we will compare A.left and B.left && A.right and B.right
- Time Complexity: O(n) = m*n -> m and n is the node number of tree A and B -> The first tree traversal is to find the root node of B in A tree. It will take O(m) time. -> The second tree traversal will be checking if sub structure of B is the same with A. This will take O(n) time. n is the number of nodes in B. -> So in total is mn.
- Space Complexity: O(n) = m -> m is the nodes of tree A. -> if m < n (n is the node number of B), we will need to do tree A traversal to find B. This will take O(m) recursion space. -> if m >= N, the worst case is to check for all the node in A which will take again O(m) as the depth of recursion. So O(n) = m