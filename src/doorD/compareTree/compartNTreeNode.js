class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.children = [];
    }
}

const root1 = new TreeNode(1, 'A');
root1.children.push(new TreeNode(2, 'B'));
root1.children.push(new TreeNode(3, 'C'));
root1.children[0].children.push(new TreeNode(4, 'D'));
root1.children[0].children.push(new TreeNode(5, 'E'));
root1.children[0].children.push(new TreeNode(6, 'F'));
root1.children[1].children.push(new TreeNode(7, 'G'));
root1.children[1].children.push(new TreeNode(8, 'H'));

const root2 = new TreeNode(1, 'A');
root2.children.push(new TreeNode(2, 'B'));
root2.children.push(new TreeNode(33, 'C'));
root2.children[0].children.push(new TreeNode(5, 'E'));
root2.children[0].children.push(new TreeNode(4, 'D'));
root2.children[0].children.push(new TreeNode(22, 'F'));
root2.children[1].children.push(new TreeNode(7, 'G'));
root2.children[1].children.push(new TreeNode(8, 'I'));

console.log(root1)
console.log(root2)

var countNode = function (node) {
    if (!node) {
        return 0;
    }

    let count = 1;

    // recursively count the children node
    for (const eachNode of node.children) {
        count += countNode(eachNode);
    }

    return count;
}

var findDiff = function (r1, r2) {
    if (!r1 && !r2) return 0;

    if (!r1 || !r2 || r1.key != r2.key) {
        return countNode(r1) + countNode(r2);
    }

    let res = 0;
    if (r1.value != r2.value) {
        res += 2;
    }
    // check their children
    let c1 = r1.children,
        c2 = r2.children;

    let c1Map = new Map(),
        c2Map = new Map();

    for (const child of c1) {
        c1Map.set(child.key, child);
    }

    for (const child of c2) {
        c2Map.set(child.key, child);
    }

    for (const [key, val] of c1Map) {
        let c2Val = c2Map.get(key);
        if (!c2Val) {
            res += countNode(val);
        } else {
            res += findDiff(val, c2Val);
            c2Map.delete(key);
        }
    }

    // if c2Map still has some remaining values
    for (const [key, val] of c2Map) {
        res += countNode(val);
    }

    return res;
}

const numsOfDifferentNodes = findDiff(root1, root2);

console.log(numsOfDifferentNodes)