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
root2.children.push(new TreeNode(2, 'B'))
root2.children.push(new TreeNode(33, 'C'))
root2.children[0].children.push(new TreeNode(5, 'E'))
root2.children[0].children.push(new TreeNode(4, 'D'))
root2.children[0].children.push(new TreeNode(22, 'F'))
root2.children[1].children.push(new TreeNode(7, 'G'))
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
    // border conditions
    if (!r1 && !r2) {
        return 0;
    }

    // if only one node exists or the key between both nodes are different
    if (!r1 || !r2 || r1.key != r2.key) {
        return countNode(r1) + countNode(r2);
    }

    // if both node exist and share the same key, calculate the case when the value is different. If the value are also the same, we don't need to consider it.
    let diffCount = 0;
    if (r1.value != r2.value) {
        diffCount += 2;
    }

    // compare the children node of them
    const c1 = r1.children;
    const c2 = r2.children;
    let c1Map = new Map();
    let c2Map = new Map();

    // init two hash map c1Map & c2Map
    for (const child1 of c1) {
        c1Map.set(child1.key, child1);
    }
    for (const child2 of c2) {
        c2Map.set(child2.key, child2);
    }

    let testVal;
    // compare two map
    for (var [key, val] of c1Map) {
        testVal = c2Map.get(key);
        // if no key found, countNode for the current branch which is val
        if (!key) {
            diffCount += countNode(val);
        } else {
            // if share the same key, no matter val is same or not, keep recursively search for the children
            diffCount += findDiff(val, testVal);
            // remove the key from c2Map after calculation
            c2Map.delete(key);
        }
    }

    // if c2Map still has some node remaining, count and add them to the diffCount
    for (var [key, val] of c2Map) {
        diffCount += countNode(val);
    }

    // return the result
    return diffCount;
}

const numsOfDifferentNodes = findDiff(root1, root2);

console.log(numsOfDifferentNodes)