/**
 * Input: nums = [3, 5, 1, 4, 2]
 * Output: [4, 2, 5, 3, 1]
 */

var rsp = function (nums) {
    if (!nums || nums.length < 1) {
        return [];
    }

    if (nums.length == 1) return nums;

    let res = [];

    var solution = function (input) {
        if (!input || input.length == 0) return res;

        let tempPeak = {
            key: -1,
            value: -1
        };
        for (let i = 0; i < input.length; i++) {
            if (isPeak(input, i)) {
                if (tempPeak.key == -1) {
                    tempPeak.key = i;
                    tempPeak.value = input[i];
                } else {
                    if (input[i] < tempPeak.value) {
                        tempPeak.key = i;
                        tempPeak.value = input[i];
                    }
                }
            }
        }
        // got the tempPeak
        if (tempPeak.key != -1) {
            res.push(tempPeak.value);
            input.splice(tempPeak.key, 1);
            solution(input);
        } else {
            return res;
        }
    }

    var isPeak = function (array, index) {
        if (!array || array.length == 0 || index < 0) return false;

        if (array.length == 1) {
            return true;
        }

        if (index == 0) {
            if (array[index] > array[index + 1]) {
                return true;
            }
        }

        if (index == array.length - 1) {
            if (array[index] > array[index - 1]) {
                return true;
            }
        }

        if (array[index] > array[index - 1] && array[index] > array[index + 1]) {
            return true;
        }

        return false;
    }

    solution(nums);
    return res;
}

console.log(rsp([3, 5, 1, 4, 2, 6]));