/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    if (numbers.length == 1) return numbers[0];

    let startIndex = 0,
        endIndex = numbers.length - 1,
        res = 0;

    var binarySearch = function (leftIndex, rightIndex) {
        if (leftIndex >= rightIndex) {
            res = numbers[leftIndex];
            return;
        }
        let midIndex = Math.floor((leftIndex + rightIndex) / 2); // Math.floor can be written as ~~
        if (numbers[midIndex] > numbers[rightIndex]) {
            binarySearch(midIndex + 1, rightIndex);
        } else if (numbers[midIndex] < numbers[rightIndex]) {
            binarySearch(leftIndex, midIndex);
        } else {
            rightIndex = rightIndex - 1;
            binarySearch(leftIndex, rightIndex);
        }
    }

    binarySearch(startIndex, endIndex);
    return res;
};