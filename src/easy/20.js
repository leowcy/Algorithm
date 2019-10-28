/*
********************************
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
********************************
*/
//Method four: Use stack. Loop the array. If getting left side like "("/"{"/"[", push to stack. If get one right side, pop the stack.
var isValid = function (s) {
    if (s == "") return true;
    if (s == null) return false;
    let sArray = s.split('');
    let sLength = sArray.length;
    if (sLength % 2 == 1) return false;
    let stack = [];
    for (let i = 0; i < sLength; i++) {
        if (sArray[i] == "(" || sArray[i] == "[" || sArray[i] == "{") {
            stack.push(sArray[i]);
        } else {
            if ((sArray[i] == ")" && stack[stack.length-1] == "(") || ((sArray[i] == "]" && stack[stack.length-1] == "[")) || ((sArray[i] == "}" && stack[stack.length-1] == "{"))) {
                stack.pop();
            } else return false;
        }
    }
    if (stack.length != 0) return false;
    return true;
}

//Method three: For loop the array. Find a left side do a +1, find a right side do a -1. Check the array at the end.
//This wont work for the case "{[}]". So abandon it.
// var isValid = function (s) {
//     if (s == "") return true;
//     if (s == null) return false;
//     let sArray = s.split('');
//     let sLength = sArray.length;
//     if (sLength % 2 == 1) return false;
//     let parentheses = brackets = openbrace = 0;
//     for (let i = 0; i < sLength; i++) {
//         switch (sArray[i]) {
//             case "(":
//                     parentheses++;
//             case ")":
//                     parentheses--;
//             case "[":
//                     brackets++;
//             case "]":
//                     brackets--;
//             case "{":
//                     openbrace++;
//             case "}":
//                     openbrace--;
//             default:
//                 return "error input";
//         }
//     }
//     if (parentheses != 0 || brackets != 0 || openbrace != 0)

// }

//Method two: Search from the Middle. But this Algorithm has some bugs which cant be accepted by some other cases.
// var isValid = function (s) {
//     // empty string
//     if (s == "") return true;
//     // null
//     if (s == null) return false;
//     // string to charArr
//     let sArray = s.split('');
//     let sLength = sArray.length;
//     // Array length is Odd. Will always false
//     if (sLength % 2 == 1) return false;
//     // Transform to ASCII array
//     let asciiArray = [];
//     for (let i = 0; i < sArray.length; i++) {
//         asciiArray.push(sArray[i].charCodeAt(0));
//     }
//     // Call the function
//     let key = sLength / 2 - 1;
//     let left, right;
//     if (key > 0) {
//         left = key - 1, right = key + 1;
//     } else {
//         left = 0, right = key + 1;
//     }
//     let result = compare(left, right, key, asciiArray);
//     if (asciiArray.length == 0) return true;
//     return false;
// }

// function compare(left, right, key, arr) {
//     if (left < 0 || right >= arr.length) {
//         if (arr.length == 0) return true;
//         return false;
//     }
//     if (arr[key] == 40 || arr[key] == 91 || arr[key] == 123) {
//         let diff = arr[right] - arr[key];
//         if (diff == 1 || diff == 2) {
//             let posDiff = right - key;
//             if ((posDiff % 2 + 1) == 1 && Math.abs(arr[right] - arr[right - 1]) >2 ) {
//                 return false;
//             }
//             arr.splice(key, 1);
//             arr.splice(right - 1, 1);
//             key = arr.length / 2 - 1;
//             if (key == 0) {left = 0;}
//             else {left = key - 1;}
//             right = key + 1;
//         } else {
//             right++;
//         }
//         compare(left, right, key, arr);
//     } else {
//         diff = arr[key] - arr[left];
//         if (diff == 1 || diff == 2) {
//             let posDiff = key - left;
//             if ((posDiff % 2 + 1) == 1 && Math.abs(arr[key] - arr[key - 1]) >2) {
//                 return false;
//             }
//             arr.splice(left, 1);
//             arr.splice(key - 1, 1);
//             key = arr.length / 2 - 1;
//             right = key + 1;
//             if (key == 0) {left = 0;}
//             else {left = key - 1;}
//         } else {
//             left--;
//         }
//         compare(left, right, key, arr);
//     }
// }

async function f() {
    let a = await isValid("()");
    console.log(a)
}

f()

//Method one: Search from Head and Tail. But Finally found out that so many different case and different conditions need to be considered and easily get wrong.
//So after consideration, decide to change to method two.
// var isValid = function(s) {
//     if (s == "")
//         return true;
//     if (s != null) {
//         let sArray = s.split('');
//         let sLength = sArray.length;
//         if (sLength % 2 == 1) {
//             return false;
//         } else {
//             let flag = 0;
//             // convert to ASCII char array
//             let asciiArray = [];
//             for (let i = 0; i < sLength; i ++) {
//                 asciiArray.push(sArray[i].charCodeAt(0));
//             }
//             // Do the Algorithm
//             let k = asciiArray.length-1;
//             for (let j = 0; j < asciiArray.length; j ++) {
//                 if (j == k) {
//                     return false;
//                 }
//                 let head = asciiArray[j];
//                 let tail = asciiArray[k];
//                 let tempDiff = tail - head;
//                 if (tempDiff === 0 && flag%2 === 0) {
//                     return false;
//                 } else if (tempDiff == 1 || tempDiff == 2) {
//                     flag ++;
//                     let posDiff = k - j;
//                     if ((posDiff % 2 + 1 ) == 1) {
//                         return false;
//                     }
//                     asciiArray.splice(j, 1);
//                     asciiArray.splice(k-1, 1);
//                     j = -1;
//                     k = asciiArray.length-1;
//                 } else if (flag%2 == 1) {
//                     if (tempDiff == 0) {

//                     } else if (tempDiff == 1 || tempDiff == 2 || tempDiff == -1 || tempDiff == -2 ) {
//                         flag ++;
//                         let posDiff = k - j;
//                         if ((posDiff % 2 + 1 ) == 1) {
//                             return false;
//                         }
//                         asciiArray.splice(j, 1);
//                         asciiArray.splice(k-1, 1);
//                         j = -1;
//                         k = asciiArray.length-1;
//                     } else {
//                         j--;
//                         k--;
//                     }
//                 } else {
//                     j--;
//                     k--;
//                 }
//             }
//             if (asciiArray.length === 0) {
//                 return true;
//             }
//             return false;
//         }
//     }
//     return false;
// };

// console.log(("(").charCodeAt(0))
// console.log((")").charCodeAt(0))
// console.log(("{").charCodeAt(0))
// console.log(("}").charCodeAt(0))
// console.log(("[").charCodeAt(0))
// console.log(("]").charCodeAt(0))


