/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let myMap = new Map();
    //set map value of vowels
    myMap.set('a', 1);
    myMap.set('e', 2);
    myMap.set('i', 3);
    myMap.set('o', 4);
    myMap.set('u', 5);
    myMap.set('A', 1);
    myMap.set('E', 2);
    myMap.set('I', 3);
    myMap.set('O', 4);
    myMap.set('U', 5);

    //add1:
    if (s == null) return null;

    var arrayOfS = s.split('');
    var i = 0, j = arrayOfS.length-1;
    while (i<=j) {
        if (myMap.has(arrayOfS[i]) && myMap.has(arrayOfS[j])) {
            let temp = arrayOfS[j];
            arrayOfS[j] = arrayOfS[i];
            arrayOfS[i] = temp;
            i++;
            j--;
        } else if (!myMap.has(arrayOfS[i]) && myMap.has(arrayOfS[j])) {
            i++;
        } else if (!myMap.has(arrayOfS[j]) && !myMap.has(arrayOfS[j])) {
            j--;
        } else {
            i++;
            j--;
        }
    }
    return arrayOfS.join('');
};