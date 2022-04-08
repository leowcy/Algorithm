/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    var findIndex = function (nums, k) {
        let l = 0,
            r = nums.length - 1;

        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] == val) return m;
            else if (nums[m] > val) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return l;
    }
    const indexToInsert = findIndex(this.nums, val);
    this.nums.splice(indexToInsert, 0, val);
    if (this.nums.length == 2) {
        this.nums.sort((a, b) => b - a);
        if (this.k == 1) {
            return this.nums[0];
        } else {
            return this.nums[1];
        }
    }
    return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */