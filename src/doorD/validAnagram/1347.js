/**
 * All change K character to make two work anagram.
 * Given a restaurant name, find other restaurants in the list that are k-anagrams with each other. A name is a k-anagram with another name if both the conditions below are true:
The names contain the same number of characters.
The names can be turned into anagrams by changing at most k characters in the string
For example:
name = "grammar", k = 3, and list = ["anagram"], "grammar" is k-anagram with "anagram" since they contain the same number of characters and you can change 'r' to 'n' and 'm' to 'a'.
name = "omega grill", k = 2 and list = ["jmegra frill"], "omega grill" is k-anagram with "jmega frill" since they contain same number of characters and you can change 'o' to 'j' and 'g' to 'f'
 */

let findKAnagrams = function (name, list, K) {
    let answer = [];
    if (!name || !list || list.length <= 0) {
        return answer;
    }

    for (const eachWord of list) {
        if (eachWord.length == input.length) {
            if (isValidAnagram(input, eachWord, K)) {
                answer.push(eachWord);
            }
        }
    }

    return answer;
}

var isValidAnagram = function (w1, w2, k) {
    const n = w1.length;
    const counts = new Array(26).fill(0);

    // use ASCIIc code for letter - "a" = 97
    for (let i = 0; i < n; i++) {
        const w1Index = w1.charCodeAt(i) - 97;
        const w2Index = w2.charCodeAt(i) - 97;

        counts[w2Index]++;
        counts[w1Index]--;
    }

    let minTimes = 0;
    for (let i = 0; i < 26; i++) {
        if (counts[i] > 0) {
            minTimes += counts[i];
        }
    }

    if (minTimes > k) {
        return false;
    } else {
        return true;
    }
}

let input = "anagram"
let list = ["grammar", "grammer", "anagram"]
let K = 2
console.log(findKAnagrams(input, list, K))
// print(["grammar", "anagram"])

// input = "anagram"
// list = ["grammar"]
// K = 3
// printfindKAnagrams(intput, list, K))
// print(["grammar"])

// input = "anagram"
// list = ["grammar"]
// K = 1
// printfindKAnagrams(intput, list, K))
// print([])

// input = "omexyb grillg"
// list = ["omgxca grille"]
// K = 2
// printfindKAnagrams(intput, list, K))
// print(["omgxca grille"])