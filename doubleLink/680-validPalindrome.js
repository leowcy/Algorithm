/**
 * @param {string} s
 * @return {boolean}
 */

//难点在于删除一个字符。重点在于一种情况，cabXabc。所以如果不递归，纯判断会出问题，因为无法得知是i++还是j--
var validPalindrome = function(s) {
    if (s == null) return null;
    var arrayOfS = s.split('');
    var i = 0, j = arrayOfS.length-1;
    var errorOnce = 0;
    while (i<j) {
        if (arrayOfS[i] != arrayOfS[j]) {
            if (errorOnce == 0) {
                if (arrayOfS[i] == arrayOfS[j-1] && arrayOfS[i+1] != arrayOfS[j]) {
                    errorOnce++;
                    j--;
                } else if (arrayOfS[i] != arrayOfS[j-1] && arrayOfS[i+1] == arrayOfS[j]) {
                    errorOnce++;
                    i++;
                } else if (arrayOfS[i] != arrayOfS[j-1] && arrayOfS[i+1] != arrayOfS[j]) {
                    if (Math.abs(j-i) <= 1) {
                        return true;
                    } else
                        return false;
                } else {
                    errorOnce++;
                    // Here, You can decide move pointer I or pointer J
                    i++;
                    //j--;
                }
            } else 
                return false;
        } else {
            i++;
            j--;
        }
    }
    return true;           
};

//所以，写一个递归方法，或左或右。
var validPalindrome = function(s) {
    if (s == null) return null;
    var arrayOfS = s.split('');
    var i = 0, j = arrayOfS.length-1;
    while (i<j) {
        if (arrayOfS[i] != arrayOfS[j]) {
            return isPalindrome(s, i, j-1) || isPalindrome(s, i+1, j)
        } else {
            i++;
            j--;
        }
    }
    return true;           
};

var isPalindrome = function(s, i, j) {
    while (i<j) {
        if (s[i++] != s[j--]) {
            return false;
        }
    }
    return true;
}