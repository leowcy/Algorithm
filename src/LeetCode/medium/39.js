/**
 * 39. Combination sum
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times.
Two combinations are unique if the frequency of at least one of the chosen numbers is different.
It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * Solution two: Backtracking/DeepFirstSearch -> Main concept: either use the current number and reduce the difference or move to the next number
 * but keep the difference as what it was. Remember to sort the array first.
 */

var combinationSum = function (candidates, target) {
    if (!candidates) return [];
    if (target === 0) return [[]];

    //sort it
    candidates = candidates.sort((a, b) => a - b);
    let res = [];

    var dfs = function (tempValue, output, index) {
        // if the index has been moved to the candidates.length place -> that means outside the scope so return nothing
        if (index === candidates.length) return;
        // if tempValue is lesser than 0, that means the difference is outside the scope so return nothing
        if (tempValue === 0) {
            // if tempValue -> find the last number -> return and end it
            res.push(output.slice());
            return;
        }
        // move the index to the next one but keep tempValue/output same as it is
        dfs(tempValue, output, index + 1);
        // if the difference is larger or equal to 0
        if (tempValue >= candidates[index]) {
            // dfs/backtrack -> remain the index but deduce the tempValue and push the candidates[index] input the array
            dfs(tempValue - candidates[index], [...output, candidates[index]], index);
        }
    }

    // dfs -> from target | empty array to be pushed into | index as 0
    dfs(target, [], 0);
    return res;
}


/**
 * First solution and thought -> calculate the difference between the target and the number in the array -> Then find the index of difference ->
 * indexOf(difference) -> if found -> save it and continue add the current number += itself -> But this solution will miss the combination of
 * smaller part -> Hence not working and many edge cases
 * */

// var combinationSum = function (candidates, target) {
//     if (!candidates || candidates.length === 0 || (candidates.length === [1] && candidates[0] > target)) return [];

//     let res = [], output = [], currentValue, flag = 1, sum = 0;

//     for (let i = 0; i < candidates.length; i++) {
//         const initValue = candidates[i];
//         sum += initValue;
//         if (sum === target && i === candidates.length - 1) {
//             res.push(candidates);
//         }
//         if (initValue > target) continue;
//         else if (initValue === target) {
//             res.push([initValue]);
//         }
//         else {
//             //console.log("initValue: ", initValue);
//             currentValue = initValue;
//             // current value is smaller than the target value
//             while (target > currentValue) {
//                 let difference = target - currentValue;
//                 if (candidates.indexOf(difference) !== -1) {
//                     output.push(difference);
//                     // console.log("difference: ", difference);
//                     // console.log("flag: ", flag);
//                     let tempFlag = flag;
//                     while (tempFlag > 0) {
//                         output.push(initValue);
//                         tempFlag--;
//                     }

//                     res.push(output);
//                     output = [];
//                 }
//                 currentValue += initValue;
//                 //console.log("currentValue: ", currentValue);
//                 flag++;
//             }
//             flag = 1;
//         }
//     }

//     console.log("res: ", res);
//     return res;
// };

combinationSum([2, 4, 8], 14);

