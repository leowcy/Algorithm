/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {

    if (!head) return null;
    let node = head,
        copy = null;

    // 1 - 2 -3 => 1 - 1' - 2 - 2' - 3 - 3'
    while (node) {
        copy = new Node(node.val);
        copy.next = node.next;
        node.next = copy;
        node = node.next.next;
    }

    // set random value
    // 1 - 1' -> 1 - 1' - null and 1 - 1' - 1
    let newNode = head;
    while (newNode) {
        if (newNode.random) {
            // 这里为什么是指向newNode.random.next而不是newNode.random，是因为我们在上一个循环中已经把原链表进行了复制，包括他们的random指针。
            // 因此这里需要指向源节点的random指针的复制版本，这样才能完成深拷贝，才能在下一步分离中完美完成。
            newNode.next.random = newNode.random.next;
        }
        newNode = newNode.next.next;
    }

    // depart them
    let resHead = head.next,
        headCopy = head,
        temp = null;

    while (headCopy && headCopy.next) {
        temp = headCopy.next;
        headCopy.next = temp.next;
        headCopy = temp;
    }
    return resHead;
};