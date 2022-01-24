/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    if (!asteroids || asteroids.length == 0) return [];

    let output = [],
        pstack = [],
        index = 0,
        len = asteroids.length;

    while (index < len) {
        let cur = asteroids[index];
        if (cur > 0) {
            pstack.push(cur);
            index++;
        } else if (cur < 0) {
            // check the pstack
            if (pstack.length == 0) {
                output.push(cur);
                index++;
            } else if (pstack.length > 0) {
                pstack = helper(pstack, cur);
                if (pstack.length == 1 && pstack[0] < 0) {
                    let onlyN = pstack.pop();
                    output.push(onlyN);
                }
                index++;
            }
        }
    }

    for (let i = 0; i < pstack.length; i++) {
        output.push(pstack[i]);
    }

    return output;
};

var compareTwo = function (a, b) {
    if (Math.abs(a) > Math.abs(b)) {
        return 1;
    } else if (Math.abs(a) < Math.abs(b)) {
        return -1;
    } else {
        return 0;
    }
}

var helper = function (arr, target) {
    if (arr.length == 0) return [target];

    let temp = arr.pop(),
        cRes = compareTwo(temp, target);
    if (cRes == 1) {
        arr.push(temp);
        return arr;
    } else if (cRes == -1) {
        return helper(arr, target);
    } else if (cRes == 0) {
        return arr;
    }
}