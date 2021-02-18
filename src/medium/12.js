/**
 * Integer to Roman
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine,
which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.
1 <= num <= 3999
 */

/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//     let s = "";
//     let indexOfThousand = Math.floor(num / 1000);
//     if (indexOfThousand > 0) {
//         num -= indexOfThousand * 1000;
//         while (indexOfThousand > 0) {
//             s += "M";
//             indexOfThousand--;
//         }
//         if (num === 0) return s;
//     }
//     let indexOfHundred = Math.floor(num / 100);
//     if (indexOfHundred > 0) {
//         num -= indexOfHundred * 100;
//         switch (indexOfHundred) {
//             case 1:
//             case 2:
//             case 3:
//                 while (indexOfHundred > 0) {
//                     s += "C";
//                     indexOfHundred--;
//                 }
//                 break;
//             case 4:
//                 s += "CD"
//                 break;
//             case 5:
//             case 6:
//             case 7:
//             case 8:
//                 s += "D"
//                 while (indexOfHundred - 5 > 0) {
//                     s += "C";
//                     indexOfHundred--;
//                 }
//                 break;
//             case 9:
//                 s += "CM"
//                 break;
//         }
//         if (num === 0) return s;
//     }
//     let indexOfTen = Math.floor(num / 10);
//     if (indexOfTen > 0) {
//         num -= indexOfTen * 10;
//         switch (indexOfTen) {
//             case 1:
//             case 2:
//             case 3:
//                 while (indexOfTen > 0) {
//                     s += "X";
//                     indexOfTen--;
//                 }
//                 break;
//             case 4:
//                 s += "XL"
//                 break;
//             case 5:
//             case 6:
//             case 7:
//             case 8:
//                 s += "L"
//                 while (indexOfTen - 5 > 0) {
//                     s += "X";
//                     indexOfTen--;
//                 }
//                 break;
//             case 9:
//                 s += "XC"
//                 break;
//         }
//         if (num === 0) return s;
//     }
//     switch (num) {
//         case 1:
//         case 2:
//         case 3:
//             while (num > 0) {
//                 s += "I";
//                 num--;
//             }
//             break;
//         case 4:
//             s += "IV"
//             break;
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//             s += "V"
//             while (num - 5 > 0) {
//                 s += "I";
//                 num--;
//             }
//             break;
//         case 9:
//             s += "IX"
//             break;
//     }
//     return s;
// };

var intToRoman = function (num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';

    for (const [key, value] of Object.entries(map)) {
        result += key.repeat(Math.floor(num / value));
        num %= value;
    }

    return result;
}

console.log(intToRoman(1111));