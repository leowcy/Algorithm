/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    if (ops.length == 1) return Number(ops[0]);

    let stackNumber = [];

    for (let i = 0; i < ops.length; i++) {
        const cur = ops[i];
        if (cur == "C") {
            stackNumber.pop();
        } else if (cur == "+") {
            let first = stackNumber[stackNumber.length-1],
                second = stackNumber[stackNumber.length-2];
            const res = Number(first) + Number(second);
            stackNumber.push(res);
        } else if (cur == "D") {
            let pre = stackNumber[stackNumber.length-1];
            stackNumber.push(Number(pre) * 2);
        } else {
            stackNumber.push(Number(cur));
        }
    }

    return stackNumber.reduce((a, b) => a + b, 0);
};

calPoints(["5","2","C","D","+"]);