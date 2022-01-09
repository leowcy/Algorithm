var encodeHours = function (s, e) {
    if (!s || !e) return null;

    const maxMin = 24 * 60 * 7;

    let minS = convertMin(s),
        minE = convertMin(e),
        res = [];

    if (minS > minE) {
        while (minS <= maxMin) {
            res.push(convertBack(minS));
            minS += 5;
        }
        minS -= maxMin;
    }
    while (minS <= minE) {
        res.push(convertBack(minS));
        minS += 5;
    }

    return res;
}

var convertMin = function (input) {
    let m = input.split(" ");

    // day - Int format
    const day = dayMap[m[0]];

    const hourAndMinString = m[1];
    const sym = m[2];

    const hourString = hourAndMinString.split(':')[0];
    const minString = hourAndMinString.split(':')[1];
    let hourInt = Number(hourString);
    const minInt = Number(minString);
    hourInt = sym == 'am' ? hourInt : hourInt + 12;

    return (day - 1) * 24 * 60 + hourInt * 60 + minInt;
}

var convertBack = function (input) {
    const minInDay = 24 * 60;

    // mon - 0 now
    let dayInt = Math.floor(input / minInDay);

    const TimeLeftMinusDay = input - dayInt * minInDay;

    let hourLeftInt = Math.floor(TimeLeftMinusDay / 60);
    let minLeftInt = TimeLeftMinusDay - hourLeftInt * 60;

    if (minLeftInt % 5 > 0 && minLeftInt < 3) {
        minLeftInt = minLeftInt - minLeftInt % 5;
    } else {
        minLeftInt = minLeftInt + (5 - minLeftInt % 5);
        if (minLeftInt == 60) {
            hourLeftInt += 1;
            minLeftInt = 0;
            if (hourLeftInt == 24) {
                dayInt += 1;
                hourLeftInt = 0;
                // dayInt 6 - Sunday / dayInt 0 - Monday
                if (dayInt == 7) {
                    dayInt = 0;
                }
            }
        }
    }

    const dayString = (dayInt + 1).toString();
    let hourString, minString;
    if (hourLeftInt < 10) {
        hourString = '0' + hourLeftInt.toString();
    } else {
        hourString = hourLeftInt.toString();
    }

    if (minLeftInt < 10) {
        minString = '0' + minLeftInt.toString();
    } else {
        minString = minLeftInt.toString();
    }

    return dayString + hourString + minString;
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

let startTime = "sun 11:01 pm",
    endTime = "mon 3:00 am";

console.log(encodeHours(startTime, endTime));