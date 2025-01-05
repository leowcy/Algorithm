// Change K char
var cka = function (s1, s2, k) {
    if (!s1 || !s2 || s1.length != s2.length) return false;

    let arr = new Array(26).fill(0),
        counter = 0;

    for (let i = 0; i < s1.length; i++) {
        // 'a' is the position of 97 in ASCII
        let w1 = s1.charCodeAt(i) - 97;
        let w2 = s2.charCodeAt(i) - 97;

        arr[w1]++;
        arr[w2]--;
    }

    for (const each of arr) {
        if (each > 0) {
            counter += each;
        }
    }

    return counter > k ? false : true;
}

// isAnagram
var ia = function (s1, s2) {
    if (!s1 || !s2 || s1.length != s2.length) return false;

    let letterMap = new Map(),
        res = true;

    for (const each of s1) {
        let tempTimes = letterMap.get(each);
        if (tempTimes) {
            letterMap.set(each, tempTimes + 1);
        } else {
            letterMap.set(each, 1);
        }
    }

    for (const each of s2) {
        let tempTimes = letterMap.get(each);
        if (!tempTimes) {
            res = false;
            break;
        } else {
            if (tempTimes > 0) {
                letterMap.set(each, tempTimes - 1);
            } else {
                res = false;
                break;
            }
        }
    }

    return res;
}

// Swap K char 
/**
 * Suppose we have two strings S and T and they are anagrams of each other. We have to find the minimum number of swaps required in S to make it same as T.
 * @param {*} s1 
 * @param {*} s2 
 * @param {*} k 
 * @returns 
 */
var ska = function (s1, s2, k) {
    if (!s1 || !s2 || s1.length != s2.length) return false;

    let index = 0;
    let res = util(s1, s2, index);

    return res > k ? false : true;
}

var util = function (s1, s2, i) {
    if (i >= s1.length) return 0;

    if (s1[i] == s2[i]) {
        return util(s1, s2, i + 1);
    }

    let temp = s2[i];
    let res = Number.MAX_VALUE;
    for (let j = i + 1; j < s1.length; j++) {
        if (temp == s1[j]) {
            s1 = swap(s1, i, j);
            res = Math.min(res, 1 + util(s1, s2, i + 1));
            // revert it back
            s1 = swap(s1, i, j);
        }
    }

    return res;
}

var swap = function (s, i, j) {
    let sArr = s.split("");

    let temp = sArr[j];
    sArr[j] = sArr[i];
    sArr[i] = temp;

    return sArr.join("");
}

console.log(ska("kolkata", "katloka", 2));