function FindIntersection(strArr) {

    // code goes here
    if (!strArr.length) return false;

    const str1 = strArr[0];
    const str2 = strArr[1];

    // convert string to array
    const arrStr1 = str1.split(', ');
    const arrStr2 = str2.split(', ');

    let i = 0, j = 0, output = [];

    while (i < arrStr1.length && j < arrStr2.length) {
        if (Number(arrStr1[i]) > Number(arrStr2[j])) {
            j++;
        } else if (Number(arrStr1[i]) < Number(arrStr2[j])) {
            i++;
        } else {
            output.push(arrStr1[i]);
            i++;
            j++;
        }
    }

    return output.length == 0 ? false : output.join(',');
}

// keep this function call here 
console.log(FindIntersection(readline()));