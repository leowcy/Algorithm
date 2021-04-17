/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if (pushed.length == 0 && popped.length == 0) return true;
    if (!pushed.length || !popped.length || pushed.length != popped.length) return false;

    // create a Map to keep track of the checked element
    let pushedMap = new Map();
    for (const pushElement of pushed) {
        pushedMap.set(pushElement, false);
    }

    // the algorithm is the next element in the poped array can only be any index later than current one or the last unchecked element
    return checkNext(pushed, popped, 0, pushedMap);
};

var checkNext = (pushed, popped, index, pushedMap) => {
    // if all qualified and move to the edge
    if (index >= pushed.length - 1) return true;

    const current = popped[index], next = popped[index + 1];
    // get index of next
    const originIndexOfNext = pushed.indexOf(next);
    // get used situation
    const isUsedNext = pushedMap.get(next);
    // get the index of current in pushed array - The TC of indexOf() is O(n)
    const originIndexOfCurrent = pushed.indexOf(current);
    // get the previous index of current which has not been used. If none - return -1
    const lastAvailableIndex = getLastAvailableIndex(originIndexOfCurrent, pushed, pushedMap);
    // check if not qualified -> return false
    if ((originIndexOfNext != lastAvailableIndex && originIndexOfNext < originIndexOfCurrent) || isUsedNext) {
        return false;
    }
    // if qualified
    pushedMap.set(current, true);
    pushedMap.set(next, true);
    return checkNext(pushed, popped, index + 1, pushedMap);
}

var getLastAvailableIndex = (originIndexOfCurrent, pushed, pushedMap) => {
    let foundIndex = -1;
    for (let i = originIndexOfCurrent - 1; i >= 0; i--) {
        let isUsed = pushedMap.get(pushed[i]);
        if (!isUsed) {
            foundIndex = i;
            break;
        }
    }
    return foundIndex;
}

// solution 2: create a stack helper
var validateStackSequences = function (pushed, popped) {
    if (pushed.length == 0 && popped.length == 0) return true;
    if (!pushed.length || !popped.length || pushed.length != popped.length) return false;

    // create a supporting stack
    let sup_stack = [];
    let indexOfPopped = 0;
    for (let i = 0, len = pushed.length - 1; i <= len; i++) {
        sup_stack.push(pushed[i]);
        while (sup_stack.length != 0 && sup_stack[sup_stack.length - 1] === popped[indexOfPopped]) {
            sup_stack.pop();
            indexOfPopped++;
        }
    }
    return !sup_stack.length;
};