/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals || intervals.length == 0) return [];
    // sort by startTime first - O(n) = n*log(n)
    intervals.sort((a, b) => a[0] - b[0]);

    let res = [];

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            // overlap - modify i+1 index value
            intervals[i + 1][0] = intervals[i][0];
            intervals[i + 1][1] = intervals[i][1] > intervals[i + 1][1] ? intervals[i][1] : intervals[i + 1][1];
        } else {
            // non-overlap
            res.push(intervals[i]);
        }
    }

    res.push(intervals.pop());

    return res;
};