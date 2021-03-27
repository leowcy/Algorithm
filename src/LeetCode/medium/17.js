/**
 * 17. Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

/**
* @param {string} digits
* @return {string[]}
*/
var letterCombinations = function (digits) {
    if (digits === "") return [];

    //init map object
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    if (digits.length === 1) return map[digits[0]];

    let row = [], column= [], newRow = [];

    for (let i = 0; i < digits.length-1; i++) {
        if (row.length === 0) row = map[digits[i]];
        // set column as the next digit
        column = map[digits[i+1]];
        for (let indexOfRow = 0; indexOfRow < row.length; indexOfRow++) {
            for (let indexOfColumn = 0; indexOfColumn < column.length; indexOfColumn++) {
                newRow.push(row[indexOfRow] + column[indexOfColumn]);
            }
        }
        row = newRow;
        newRow = [];
    }
    console.log(row)
    return row;
};

letterCombinations("237");