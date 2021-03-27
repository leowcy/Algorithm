/**
 * 49. Group Anagrams
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  var groupAnagrams = function (strs) {
//     if (strs.length == 0) return [[""]];
//     if (strs.length == 1) return [strs];

//     var check = function (strs, res) {
//         if (strs.length == 0) return;
//         if (strs.length == 1) {
//             res.push(strs);
//             return;
//         }
//         const firstStr = strs[0];
//         let temp = [];
//         temp.push(firstStr);
//         strs.shift();
//         for (let i = 0; i < strs.length; i++) {
//             if (isSame(firstStr, strs[i])) {
//                 temp.push(strs[i]);
//                 if (i == strs.length - 1) {
//                     strs.pop();
//                     break;
//                 } else {
//                     // slice i of strs
//                     strs.splice(i, 1);
//                     // put i into the right index
//                     i--;
//                 }
//             }
//         }
//         // recursively call
//         res.push(temp);
//         check(strs, res);
//     }

//     let res = [];
//     check(strs, res);
//     return res;
// };

// var isSame = function (str1, str2) {
//     let flag = true;
//     if (str1.length == str2.length) {
//         let str1Map = new Map();
//         // create map and set init value of str1
//         for (let eachChar of str1) {
//             let value = str1Map.has(eachChar) ? str1Map.get(eachChar) : 0;
//             value++;
//             str1Map.set(eachChar, value);
//         }
//         // for loop and check with str2
//         for (let eachChar of str2) {
//             if (str1Map.has(eachChar)) {
//                 let value = str1Map.get(eachChar);
//                 value--;
//                 if (value < 0) {
//                     flag = false;
//                     break;
//                 }
//                 str1Map.set(eachChar, value)
//             } else {
//                 flag = false;
//                 break;
//             }
//         }
//         return flag;
//     } else {
//         flag = false;
//         return false;
//     }
// }


//sort the array of string first -> sort the each string (the reason is the order of them does not matter)
var groupAnagrams = function(strs) {
    strs = strs.sort();
    //console.log("strs.sort(): ", strs.sort());
    var mapping = {};
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var sorted = str.split('').sort().join('');
        //console.log("sorted: ", sorted);
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }
    
    var output = [];
    for (var arr in mapping) {
        output.push(mapping[arr]);
    }
    
    return output;
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);