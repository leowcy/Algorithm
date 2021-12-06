/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
 var maxValue = function (events, k) {
    // sort the events
    events.sort((a,b) => a[1] - b[1]);
    // findMaxMeeting
    return findMaxMeeting(events, k);
};

var findMaxMeeting = function (events, k) {
    let maxValue = new Array(events.length).fill(0).map(() => new Array(k + 1).fill(0));
    maxValue[0][1] = events[0][2];
    let ans = maxValue[0][1];

    for (let i = 1; i < events.length; i++) {
        for (let j = 1; j <= Math.min(k, i + 1); j++) {
            maxValue[i][j] = Math.max(events[i][2], maxValue[i - 1][j]);
            let closestMeetingIndex = findClosestMeeting(events, i);
            if (closestMeetingIndex != -1) {
                maxValue[i][j] = Math.max(maxValue[i][j], maxValue[closestMeetingIndex][j - 1] + events[i][2]);
            }
            ans = Math.max(ans, maxValue[i][j]);
        }
    }

    return ans;
}

var findClosestMeeting = function (events, currentIndex) {
    let start = 0;
    let end = currentIndex - 1;
    let targetIndex = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (events[mid][1] < events[currentIndex][0]) {
            targetIndex = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return targetIndex;
}