/**
 * initialize your data structure here.
 */

// solution 1: sort -> time complexity: O(NlogN) - no AC for such time/space complexity
var MedianFinder = function () {
    this.data = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.data.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const length = this.data.length;
    if (!length) return null;

    this.data.sort((a, b) => a - b);

    const mid = Math.floor((length - 1) / 2);
    if (length % 2) {
        return this.data[mid];
    }
    return ((this.data[mid] + this.data[mid + 1]) / 2);
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


// solution 2: 二分查找 - 每次插入确保元素是有序的，然后获取中位数只需要常数时间。
var MedianFinder = function () {
    this.data = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (!this.data.length) {
        this.data.push(num);
        return;
    }

    let left = 0,
        right = this.data.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.data[mid] == num) {
            // insert element in the mid position with num
            this.data.splice(mid, 0, num);
            return;
        } else if (this.data[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    this.data.splice(right + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const length = this.data.length;
    if (!length) return null;

    const mid = Math.floor((length - 1) / 2);
    if (length % 2) {
        return this.data[mid];
    }
    return ((this.data[mid] + this.data[mid + 1]) / 2);
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// solution 3: Heap - Best way dealing with dynamic data

const defaultCmp = (x, y) => x > y;

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }

    insert(data) {
        const { container, cmp } = this;

        container.push(data);

        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (!cmp(container[index], container[parent])) {
                return;
            }
            swap(container, index, parent);
            index = parent;
        }
    }

    extract() {
        const { container, cmp } = this;
        if (!container.length) {
            return null;
        }

        swap(container, 0, container.length - 1);
        const res = container.pop();
        const length = container.length;
        let index = 0,
            exchange = index * 2 + 1;

        while (exchange < length) {
            let right = index * 2 + 2;
            if (right < length && cmp(container[right], container[exchange])) {
                exchange = right;
            }
            if (!cmp(container[exchange], container[index])) {
                break;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }

        return res;
    }

    top() {
        if (this.container.length) return this.container[0];
        return null;
    }
}

var MedianFinder = function () {
    this.maxHeap = new Heap();
    this.minHeap = new Heap((x, y) => x < y);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.top());
    this.maxHeap.extract();

    if (this.maxHeap.container.length < this.minHeap.container.length) {
        this.maxHeap.insert(this.minHeap.top());
        this.minHeap.extract();
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    return this.maxHeap.container.length > this.minHeap.container.length ? this.maxHeap.top() : (this.minHeap.top() + this.maxHeap.top()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */