var js2 = function (startTime, endTime, d_starts, d_ends, profit) {
    let n = startTime.length;
    let job = [];

    for (let i = 0; i < n; i++) {
        if (startTime[i] >= d_starts && endTime[i] <= d_ends) {
            job.push({
                startTime: startTime[i],
                endTime: endTime[i],
                profit: profit[i]
            });
        }
    }

    // sort the job by the end time
    job.sort((a, b) => a.endTime - b.endTime);

    console.log(job)

    return mp(job);
}

var mp = function (job) {
    // init maxProfit value as the 'first' job's profit
    let maxProfit = [];
    maxProfit[0] = job[0].profit;

    for (let i = 1; i < job.length; i++) {
        let tempProfit = job[i].profit;
        let findMostCloseJob = fcj(job, i);
        if (findMostCloseJob != -1) {
            tempProfit += maxProfit[findMostCloseJob];
        }
        maxProfit[i] = Math.max(tempProfit, maxProfit[i - 1]);
    }

    return maxProfit[job.length - 1];
}

var fcj = function (job, index) {
    // use binary search - take only logN time complexity
    let l = 0;
    let r = index - 1;
    let res = -1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (job[mid].endTime <= job[index].startTime) {
            // qualified
            res = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return res;
}

console.log(js2([2, 3, 5, 7], [6, 5, 11, 10], 2, 10, [5, 2, 4, 4]));