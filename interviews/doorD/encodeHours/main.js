/**
 * Ex: Input: ("mon 10:00 am", "mon 11:00 am")
Output: [“11000”, “11005”, “11010”, “11015”, “11020”, “11025”, “11030”, “11035”, “11040”, “11045”, “11050”, “11055”, “11100”]
 */

var encodeHours = function (startTime, endTime) {
    if (!startTime || !endTime) return [];
    let res = [];

    let convertedStartTime = convertTime(startTime),
        convertedEndTime = convertTime(endTime);

    const allMinutesInAWeek = 24 * 60 * 7;

    if (convertedStartTime.timeInInt > convertedEndTime.timeInInt) {
        // when startTime is 'sun' but endTime is 'mon'
        while (convertedStartTime.timeInInt <= allMinutesInAWeek) {
            res.push(convertTimeToString(convertedStartTime.timeInInt));
            convertedStartTime.timeInInt += 5;
        }
        convertedStartTime.timeInInt -= allMinutesInAWeek;

    }
    while (convertedStartTime.timeInInt <= convertedEndTime.timeInInt) {
        res.push(convertTimeToString(convertedStartTime.timeInInt));
        convertedStartTime.timeInInt += 5;
    }

    return res;
}

const dayMap = {
    "mon": 1,
    "tue": 2,
    "wed": 3,
    "thu": 4,
    "fri": 5,
    "sat": 6,
    "sun": 7
};

var convertTime = function (t) {
    // split by ' ' - t[0] will be the day. t[1] will be the time. If there is t[2] - it will be 'am' or 'pm'
    const timeArr = t.split(' ');
    // day will be a int
    const day = dayMap[timeArr[0]];
    const hourAndMin = timeArr[1].split(':');
    // hour and minute will be type of string
    let hour = hourAndMin[0],
        minute = hourAndMin[1];
    if (timeArr[2] && timeArr[2] != '') {
        // 12 hour rate
        if (timeArr[2] == 'pm') {
            hour = (Number(hour) + 12).toString();
        }
    }
    const convertedTimeObj = {};
    convertedTimeObj.timeInString = day.toString() + hour + minute;
    const minutesInADay = 24 * 60;
    convertedTimeObj.timeInInt = (day - 1) * minutesInADay + Number(hour) * 60 + Number(minute);
    return convertedTimeObj;
}

var convertTimeToString = function (timeInMinute) {
    const day = Math.floor(timeInMinute / (24 * 60)) + 1;
    let hour = Math.floor((timeInMinute - ((day - 1) * 24 * 60)) / 60),
        minute = (timeInMinute - ((day - 1) * 24 * 60)) - (hour * 60);

    let minRemain = minute % 5;
    if (minRemain > 0 && minRemain < 3) {
        minute = minute - minRemain;
    } else {
        minute = minute + (5 - minRemain);
    }

    if (hour < 10) {
        hour = "0" + hour.toString();
    }

    if (minute < 10) {
        minute = "0" + minute.toString();
    }

    return day.toString() + hour.toString() + minute.toString();
}

let startTime = "sun 11:01 pm",
    endTime = "mon 3:00 am";

console.log(encodeHours(startTime, endTime));