/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
    let que = new MinPriorityQueue({
        priority: (obj) => obj.val
    });

    let counter = 0;
    let ans = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let tempVal = arr[i] / arr[arr.length - 1];
        let obj = {
            i,
            j: arr.length - 1,
            val: tempVal
        };
        que.enqueue(obj);
    }

    while (counter < k) {
        let dequeObj = que.dequeue().element;
        let i = dequeObj.i;
        let j = dequeObj.j;
        ans = [arr[i], arr[j]];
        if (j > i + 1) {
            let tempVal = arr[i] / arr[j - 1];
            let obj = {
                i,
                j: j - 1,
                val: tempVal
            };
            que.enqueue(obj);
        }
        counter++;
    }

    return ans;
};