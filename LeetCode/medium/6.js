/**
 * 6. Zigzag Conversion
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 * (you may want to display this pattern in a fixed font for better legibility)
 */

/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/
var convert = function (s, numRows) {
    let twoDArray = [...new Array(numRows)].map(_ => new Array(Math.ceil(s.length / 2)).fill("-1")),
        row = 0,
        column = 0,
        directionFlag = true, // true -> from top to bottom
        indexOfS = 0,
        res = "";

    if ((s && s.length === 1) || numRows === 1) return s;

    while (indexOfS < s.length) {
        if (directionFlag && row < numRows) {
            twoDArray[row][column] = s[indexOfS];
            row++;
            indexOfS++;
        } else if (!directionFlag && row >= 0) {
            twoDArray[row][column] = s[indexOfS];
            row--;
            column++;
            indexOfS++;
        } else if (row >= numRows) {
            directionFlag = false;
            column++;
            row = numRows - 2;
        } else if (row < 0) {
            directionFlag = true;
            row = 1;
            column--;
        }
    }

    for (let j = 0; j < numRows; j++) {
        for (let i = 0; i < Math.ceil(s.length / 2); i++) {
            if (twoDArray[j][i] !== "-1") {
                res += twoDArray[j][i];
            }
        }
    }
    return res;
};

convert("abcdefghij", 3)

/**
 * Beat 98.56% solution:
 *
 * var convert = function(s, numRows) {
  let result = [];
  let row = 0;
  let goingUp = false;
  for (let i = 0; i < s.length; i++) {
    result[row] = (result[row] || '') + s[i]; // append letter to active row
    if (goingUp) {
      row--;
      if (row === 0) goingUp = false; // reverse direction if goingUp and reaching top
    } else {
      row++;
      if (row === numRows - 1) goingUp = true; // reverse direction after reaching bottom
    }

  }
  return result.join('');
};
 */

