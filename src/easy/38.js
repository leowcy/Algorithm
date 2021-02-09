/**
 * 38. Count and Say
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 * To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character.
 * Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
 * Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return n.toString();
    }
    let stringOfLast = countAndSay(n - 1);
    let s = "", count = 1;
    for (let i = 0; i < stringOfLast.length; i++) {
        if (stringOfLast[i] === stringOfLast[i + 1]) {
            count++;
        } else {
            s = s + count + stringOfLast[i].toString();
            count = 1;
        }
    }
    console.log("s: ", s);
    return s;
};

// Non-recursive solution
/**
 * var countAndSay = function(n) {
    var str = '1';
    for (var i=1; i < n; i++) {
        var strArray = str.split('');
        str ='';
        var count = 1;
        // Loop through current nth level line
        for (var j=0; j < strArray.length; j++) {
            // Next digit is different
            if (strArray[j] !== strArray[j+1]) {
                // Go to next non-matching digit
                str += count + strArray[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return str;
};
 */