
var UndergroundSystem = function () {
    this.stationMap = {};
    this.userMap = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    const cur = this.userMap.get(id);
    if (cur && cur !== "") {
        return null;
    } else {
        this.userMap.set(id, {
            stationName: stationName,
            t: t
        });
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const user = this.userMap.get(id);
    if (!user) {
        return null;
    }
    const startStation = user.stationName;
    const endStation = stationName;
    const time = t - user.t;
    const key = startStation + ":" + endStation;
    const station = this.stationMap[key];
    if (!station || station == "") {
        this.stationMap[key] = [time];
    } else {
        this.stationMap[key].push(time);
    }
    // remove user from userMap
    this.userMap.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    const key = startStation + ":" + endStation;
    const stationInfo = this.stationMap[key];
    if (!stationInfo || stationInfo == []) {
        return null;
    } else {
        const sum = stationInfo.reduce((a, b) => a + b, 0);
        return sum / stationInfo.length;
    }
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */