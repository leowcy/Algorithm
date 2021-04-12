### 对称的二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
```
    1
   / \
  2   2
   \   \
   3    3
```
示例 1：
输入：root = [1,2,2,3,4,4,3]
输出：true

示例 2：
输入：root = [1,2,2,null,3,null,3]
输出：false

## solution: 递归
- 首先写好边界条件。如果root==null，返回true因为是对称的。如果root节点没有左右孩子节点，直接返回true。
- 新建一个递归函数，其中把root所为递归函数的两个变量。递归的判断条件有三：
1. 如果均为空，也是对称的，返回true。
2. 如果一方为空，不对称，返回false。
3. 如果两方非空但val值不相等，返回false。
4. 如果两棵树的当前节点非空且值相同，我们就递归的判断A.left和B.right + A.right和B.left。
- 上述第四步是本题的关键。判断一颗二叉树是否对称，我们首先想到先序遍历。先序遍历的规律是根节点-左子节点-右子节点。因此我们定义一个新的遍历方法，
    根节点-右子节点-左子节点。这种新定义的遍历方法正是先序遍历的对称树，所以我们可以这么做去对比树是否为对称二叉树。这就是我们去对比A.left和B.right
    的值得原因。
- Time Complexity: O(n) = n -> n为树的节点数。每次执行checkSymmetricTree()的递归方法时，可以判断一对节点是否对称，最多递归n/2次，所以为n。
- Space Complexity: O(n) = n -> when tree degenerates to linked list, we will need to stack of length of n to store the value. So the depth
    of recursion call could be n.