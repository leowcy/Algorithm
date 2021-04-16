/**
 * initialize your data structure here.
 */
var MinStack = function () {
    // 定义两个栈，min_stack栈用来记录每一步的最小值，不能在用的时候再查找
    this.x_stack = [];
    this.min_stack = [Infinity];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.x_stack.push(x);
    // 只需要跟前一个比大小，因为前一个是上一步的最小值
    this.min_stack.push(Math.min(x, this.min_stack[this.min_stack.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.x_stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.x_stack[this.x_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */