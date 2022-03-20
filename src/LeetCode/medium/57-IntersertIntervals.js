/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (!intervals || intervals.length == 0) return [newInterval];
    if (!newInterval || newInterval.length == 0) return intervals;
    let isNewIntervalMerged = false,
        res = [];

    if (intervals.length == 1) {
        if (intervals[0][1] >= newInterval[0] && intervals[0][0] <= newInterval[1]) {
            intervals[0][0] = Math.min(intervals[0][0], newInterval[0]);
            intervals[0][1] = Math.max(intervals[0][1], newInterval[1]);
        } else {
            if (newInterval[1] < intervals[0][0]) {
                // push it to the first element
                intervals.unshift(newInterval);
            } else if (newInterval[0] > intervals[0][1]) {
                intervals.push(newInterval);
            }
        }
        return intervals;
    }

    for (let i = 0; i < intervals.length - 1; i++) {
        if (!isNewIntervalMerged) {
            // compare with the current one only
            if (intervals[i][1] >= newInterval[0] && intervals[i][0] <= newInterval[1]) {
                isNewIntervalMerged = true;
                intervals[i][0] = Math.min(intervals[i][0], newInterval[0]);
                intervals[i][1] = Math.max(intervals[i][1], newInterval[1]);
                i--;
            } else if (intervals[i][1] < newInterval[0] && intervals[i + 1][0] > newInterval[1]) {
                isNewIntervalMerged = true;
                res.push(intervals[i]);
                res.push(newInterval);
            } else {
                res.push(intervals[i]);
            }
        } else {
            // compare with the next one to check if overlap
            if (intervals[i][1] >= intervals[i + 1][0]) {
                intervals[i + 1][0] = Math.min(intervals[i + 1][0], intervals[i][0]);
                intervals[i + 1][1] = Math.max(intervals[i + 1][1], intervals[i][1]);
            } else {
                res.push(intervals[i]);
            }
        }
    }

    if (!isNewIntervalMerged) {
        // compare with the last element first - if not overlapped - push or unshift the newInterval
        const lastElement = intervals.pop();
        if (lastElement[1] >= newInterval[0] && lastElement[0] <= newInterval[1]) {
            lastElement[0] = Math.min(lastElement[0], newInterval[0]);
            lastElement[1] = Math.max(lastElement[1], newInterval[1]);
            res.push(lastElement);
        } else {
            res.push(lastElement);
            if (newInterval[1] < intervals[0][0]) {
                // push it to the first element
                res.unshift(newInterval);
            } else if (newInterval[0] > lastElement[1]) {
                res.push(newInterval);
            }
        }
    } else {
        res.push(intervals.pop());
    }

    return res;
};