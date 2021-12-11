/**
 * Definition: Similar restaurants
Two restaurants R1 and R2 are similar if we can swap a maximum of two letters (in different 
positions) of R1, so that it equals R2.
For example, source one may have a restaurant named "omega grill" while another source may 
have the same restaurant as "omgea grill".
For example, "biryani" and "briyani" are similar (swapping at positions 1 and 2). "biryani" is not 
similar to following, "biryeni" (no e to swap with), "briynai"(Needs 2 swap)

All one swap only
 */

var findSimilarRestaurants = function (input, list) {
    let answer = [];
    if (!input || !list || list.length <= 0) {
        return answer;
    }

    for (const eachWord of list) {
        if (eachWord.length == input.length) {
            if (isValidAnagram(input, eachWord)) {
                answer.push(eachWord);
            }
        }
    }

    return answer;
}

var isValidAnagram = function (w1, w2) {
    if (w1.length != w2.length || w1.length < 2) {
        return false;
    }

    let count = 0;
    let count2 = 0;
    let dif = [];
    let hash = {};

    for (let i = 0; i < w1.length; i++) {
        if (w1[i] != w2[i]) {
            // ex: push ["a", "b"] to dif array and set the count of diff +1
            dif.push([w1[i], w2[i]]);
            count += 1;
        } else {
            // if two letter are the same
            if (hash[w1[i]]) {
                // if there is already a w1[i] exists in the hash object, set the count2 = 2
                count2 = 2;
            } else {
                // if there is not w1[i] in the hash obj, init its val = 1
                hash[w1[i]] = 1;
            }
        }
        if (count > 2) {
            return false;
        }
    }

    // Two true conditions: 1. no mismatch letter and count2 > 1 - means more than one letter in the word at least and no mismatch
    // Option 2: dif array [["a", "b"] , ["b", "a"]] has to be in this combination
    if ( (count == 0 && count2 > 1) || ( dif[1] && dif[0][0] == dif[1][1] && dif[0][1] == dif[1][0] ) ) {
        return true;
    } else {
        return false;
    }
}

let input = "hotpot";
let list = ["hottop", "hotopt", "hotpit", "httoop", "hptoot"];
console.log(findSimilarRestaurants(input, list));
// print(["hottop", "hotopt", "hptoot"])

// input = "biryani"
// list = ["biryani", "biryeni", "biriyani", "biriany", "briynai"]
// print(["biryani", "biriany"])

// input = "omega grill"
// list = ["omeag grill", "omeea grill", "omega gril", "omegla gril"]
// print(["omeag grill"])