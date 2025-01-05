
var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    const last = this.queue1.shift();
    this.queue1 = this.queue2;
    this.queue2 = [];
    return last;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    const last = this.queue1.shift();
    this.queue2.push(last);
    this.queue1 = this.queue2;
    this.queue2 = [];
    return last;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue1.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */