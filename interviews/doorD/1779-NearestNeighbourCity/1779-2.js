/**
 * @param {number[]} queries - queries = ["Beijing", "Harbin"]
 * @param {number[][]} cities - cities = [[Beijing, 0, 0], [Harbin, -2, 1], ... [] ]
 * @return {number}
 */
var nearestValidPoint = function (queries, cities) {
    // init the cities map
    let cityMap = new Map();
    for (let i = 0; i < cities.length; i++) {
        cityMap.set(cities[i][0], {
            "x": cities[i][1],
            "y": cities[i][2]
        })
    }

    let res = [];
    for (let j = 0; j < queries.length; j++) {
        // find the cities coor
        let findCity = cityMap.get(queries[j]);
        if (!findCity) {
            res.push('NONE');
        } else {
            let closestCity = findClosestCity(cities, queries[j], findCity);
            res.push(closestCity);
        }
    }
    console.log(res);
    return res;
};

var findClosestCity = function (cities, targetCityName, targetCityCoor) {
    let manDistance = Infinity;
    let closestCities = [];

    for (let i = 0; i < cities.length; i++) {
        if (cities[i][1] == targetCityCoor.x || cities[i][2] == targetCityCoor.y) {
            if (cities[i][0] != targetCityName) {
                let tempManDistance = Math.abs(cities[i][1] - targetCityCoor.x) + Math.abs(cities[i][2] - targetCityCoor.y);
                if (tempManDistance <= manDistance) {
                    manDistance = tempManDistance;
                    closestCities.push(cities[i][0]);
                }
            }
        }
    }

    if (closestCities.length != 0) {
        closestCities.sort();
        return closestCities[0];
    } else {
        return 'NONE';
    }
}

let queries = ["Beijing", "Canton"];
let cities = [
    ["Beijing", 0, 0],
    ["Canton", -5, 1],
    ["Pingdingshan", 5, 5],
    ["Harbin", 1, 0],
    ["Hongkong", -6, 1],
    ["Macau", -4, 1],
    ["Cangzhou", 0, 2],
];
nearestValidPoint(queries, cities);