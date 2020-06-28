/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let max = m + n - 1;
    if (nums1.length == 0 && nums2.length == 0) return null;
    else if (nums1.length != 0 && nums2.length == 0) return nums1;
    else if (nums1.length == 0 && nums2.length != 0) {
        nums1 = nums2;
        return nums1;
    } else {
        while (n - 1 >= 0 && m - 1 >= 0) {
            if (nums1[m - 1] <= nums2[n - 1]) {
                //如果nums2的最大的数比nums1最大的数要大，那么nums2的最大的数一定在nums1的m+n-1的位置
                nums1[max] = nums2[n-1]
                n--;
            } else {
                //如果nums1的最大数比当前n-1大，也往后放
                nums1[max] = nums1[m - 1];
                nums1[m - 1] = 0;
                m--;
            }
            max--;
        }
        //如果此时m已经为0但是n还大于0，说明n中剩余的数字都是最小的，则直接放入。
        if (m == 0 && n > 0) nums1 = putRemaining(nums1, nums2, n);
    }
    console.log(nums1)
    return nums1;
};

function putRemaining(n1, n2, n) {
    for (let i = 0; i < n; i++) {
        n1[i] = n2[i]
    }
    return n1;
}

// function putBigNumber(biggestNum, arr, maxLength) {
//     if (maxLength >= 0) {
//         if (arr[maxLength] === 0) {
//             arr[maxLength] = biggestNum;
//             console.log("arr: ", arr)
//             return arr;
//         } else {
//             maxLength--;
//             putBigNumber(biggestNum, arr, maxLength);
//         }
//     }
// }

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// QuickSort but not working properly

// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }
// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }

