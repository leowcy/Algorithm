/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
    this.iterator = iterator;
    this.pointer = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
    if (this.pointer !== null) {
        return this.pointer;
    } else {
        if (this.iterator.hasNext()) {
            this.pointer = this.iterator.next();
        }
        return this.pointer;
    }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
    if (this.pointer !== null) {
        const temp = this.pointer;
        this.pointer = null;
        return temp;
    }
    return this.iterator.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
    if (this.pointer !== null) return true;
    return this.iterator.hasNext();
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */