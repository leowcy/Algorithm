/**
 * 40. Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // sort the candidates array ascending
    candidates.sort((a, b) => a - b);
    let res = [], combinationSet = new Set();

    var dfs = (tempTargetValue, combination, index) => {
        if (index === candidates.length + 1) return;
        if (tempTargetValue < 0) return;
        if (tempTargetValue === 0) {
            let tempCombinationString = "";
            for (let i = 0; i < combination.length; i++) {
                tempCombinationString += combination[i].toString();
            }
            console.log("combinationSet: ", combinationSet);
            console.log("tempCombinationString: ", tempCombinationString);
            if (!combinationSet.has(tempCombinationString)) {
                combinationSet.add(tempCombinationString);
                res.push(combination);
            }
            return;
        }
        dfs(tempTargetValue, combination, index + 1);
        if (tempTargetValue >= candidates[index]) {
            dfs(tempTargetValue - candidates[index], [...combination, candidates[index]], index + 1);
        }
    }

    dfs(target, [], 0);
    return res;
};

combinationSum2([2, 5, 2, 1, 2], 5);