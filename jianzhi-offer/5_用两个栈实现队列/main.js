var CQueue = function() {
    this.stackA = [];
    this.stackB = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value);
};

/**
 * @return {number}
 * In JS, stack is array
 */
CQueue.prototype.deleteHead = function() {
    if (this.stackB.length != 0) {
        return this.stackB.pop();
    } else {
        if (this.stackA.length == 0) {
            return -1;
        } else {
            while(this.stackA.length > 0) {
                this.stackB.push(this.stackA.pop());
            }
            return this.stackB.pop();
        }
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */