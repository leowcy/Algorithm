/**
 * 8. String to Integer (atoi)
 * Implement the myAtoi(string s) function,
 * which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 */

/**
* @param {string} s
* @return {number}
*/
var myAtoi = function (s) {
    let newS = "",
        res = 0,
        flagOfSymbol = true,
        isPositive = 1,
        breakFlag = false;

    // get the pure number string first
    for (let i = 0; i < s.length; i++) {
        if (breakFlag) break;
        switch (s[i]) {
            case ' ':
                if (newS.length > 0 || !flagOfSymbol) {
                    breakFlag = true;
                }
                break;
            case '+':
                if (flagOfSymbol) {
                    flagOfSymbol = false;
                } else breakFlag = true;
                break;
            case '-':
                if (flagOfSymbol) {
                    isPositive = -1;
                    flagOfSymbol = false;
                } else breakFlag = true;
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                newS += s[i];
                flagOfSymbol = false;
                break;
            default:
                breakFlag = true;
                break;
        }
    }

    if (newS === "") return 0;

    // convert it into the number and return it
    for (let j = 0; j < newS.length; j++) {
        res += newS[j] * Math.pow(10, newS.length - j - 1);
    }
    res = isPositive * res;

    // if res in the scope of [-2^31, 2^31-1]
    if (res > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31)-1;
    } else if (res < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    } else return res;
};