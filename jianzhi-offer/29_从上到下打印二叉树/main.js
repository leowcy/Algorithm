/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const queue = [root], data = [];

    while (queue.length) {
        const temp = queue.shift();
        data.push(temp.val);
        temp.left && queue.push(temp.left);
        temp.right && queue.push(temp.right);
    }

    return data;
};

// 第二题：按层打印结果
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const queue = [[root, 0]], data = [];

    while (queue.length) {
        let [temp, level] = queue.shift();
        if (!data[level]) data[level] = [];
        data[level].push(temp.val);

        temp.left && queue.push([temp.left, level + 1]);
        temp.right && queue.push([temp.right, level + 1]);
    }

    return data;
};

// 题目变形3：Zigzag print out binary tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const queue = [[root, 0]], data = [];

    while (queue.length) {
        let [temp, level] = queue.shift();
        if (!data[level]) data[level] = [];
        data[level].push(temp.val);

        temp.left && queue.push([temp.left, level + 1]);
        temp.right && queue.push([temp.right, level + 1]);
    }

    // 输出时进行奇数层逆序
    for (let i = 1; i < data.length; i++) {
        if (i % 2 == 1) {
            data[i].reverse();
        }
    }
    return data;
};

//解法2：
var levelOrder = function (root) {
    if (!root) return [];

    const queue = [[root, 0]], data = [];

    while (queue.length) {
        let [temp, level] = queue.shift();
        if (!data[level]) data[level] = [];
        if (level & 1) {
            // 奇数层头插
            data[level].unshift(temp.val);
        } else
            // 偶数层尾插
            data[level].push(temp.val);

        temp.left && queue.push([temp.left, level + 1]);
        temp.right && queue.push([temp.right, level + 1]);
    }

    return data;
};