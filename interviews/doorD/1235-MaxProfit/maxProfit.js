/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
 var jobScheduling = function (startTime, endTime, profit) {
    let n = startTime.length;
    let job = [];

    // get an Job array of object including each job's start/end/profit
    for (let i = 0; i < n; i++) {
        job.push({
            startTime: startTime[i],
            endTime: endTime[i],
            profit: profit[i]
        });
    }

    // sort the job by the end time
    job = job.sort((a, b) => a.endTime - b.endTime);

    // find the maxProfit
    return maxProfit(job, n);
};

var maxProfit = function (job, len) {
    // init profit array
    let profit = [];
    profit[0] = job[0].profit;

    for (let i = 1; i < len; i++) {
        let currentProfit = job[i].profit;
        let closestNotOverLappingJobIndex = findClosestJob(job, job[i].startTime, i);
        if (closestNotOverLappingJobIndex != -1) {
            // if found
            currentProfit += profit[closestNotOverLappingJobIndex];
        }
        profit[i] = Math.max(profit[i - 1], currentProfit);
    }

    return profit[len - 1];
}

// most importantly - Finding the closest job which endTime is earlier than the current startTime. (Left hand side part)
var findClosestJob = function (job, startTime, currentIndex) {
    // set the left/smallest index
    let start = 0;
    // set the right/largest index
    let end = currentIndex;
    let index = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (job[mid].endTime <= startTime) {
            // set the current qualified index to mid and also lower the end border to mid -1 and trying to find if
            // any possible closer one
            index = mid;
            start = mid + 1;
        } else {
            // higher the start side to mid + 1 to keep searching for any possible existing closer value to the target
            end = mid - 1;
        }
    }

    return index;
}