/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// solution 1:
var getLeastNumbers = function (arr, k) {
    if (arr.length == 0 || k == 0) return [];
    const sortArr = arr.sort((a, b) => a - b);
    return sortArr.slice(0, k);
};

// solution 2:
var getLeastNumbers = function (arr, k) {
    if (arr.length == 0 || k == 0) return [];

    let heap = new MaxHeap(arr.slice(0, k));

    for (let i = k; i < arr.length; i++) {
        if (heap.top() > arr[i]) {
            heap.extra();
            heap.insert(arr[i]);
        }
    }
    return heap.container;
};

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MaxHeap {
    constructor(arr = []) {
        this.container = [];
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this));
        }
    }

    insert(data) {
        const { container } = this;

        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (container[index] <= container[parent]) {
                break;
            }
            swap(container, index, parent);
            index = parent;
        }
    }
    extra() {
        const { container } = this;
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
            if (right < length && container[right] > container[exchange]) {
                exchange = right;
            }
            if (container[exchange] <= container[index]) {
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

// solution 3: Partition (Based on quick sort)
var getLeastNumbers = function (arr, k) {
    if (arr.length == 0 || k == 0) return [];
    if (k >= arr.length) return arr;

    let left = 0,
        right = arr.length - 1;

    let index = partition(arr, left, right);
    while (index !== k) {
        if (index < k) {
            left = index + 1;
            index = partition(arr, left, right);
        } else if (index > k) {
            right = index - 1;
            index = partition(arr, left, right);
        }
    }

    return arr.slice(0, k);
};

function partition(arr, start, end) {
    const k = arr[start];
    let left = start + 1,
        right = end;

    while (1) {
        while (left <= end && arr[left] <= k) ++left;
        while (right >= start + 1 && arr[right] >= k) --right;

        if (left >= right) {
            break;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        ++left;
        --right;
    }
    [arr[right], arr[start]] = [arr[start], arr[right]];
    return right;
}