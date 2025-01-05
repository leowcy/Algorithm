/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function (piles, h) {
    if (piles.length == h) {
        return Math.max(...piles);
    }

    possible = function (k) {
        let times = 0;
        for (let p of piles) {
            times += Math.ceil(p / k);
        }
        return times <= h;
    }

    let l = 1,
        r = Math.max(...piles);

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (!possible(m)) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return l;
};