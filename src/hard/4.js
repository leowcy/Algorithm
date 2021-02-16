/**
 * 4. Median of Two Sorted Arrays
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * Follow up: The overall run time complexity should be O(log (m+n))
 */

var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    let indexOfMedian;

    let carry = (m + n) % 2;
    if (carry === 0) {
        indexOfMedian = (m + n) / 2;
    } else {
        indexOfMedian = Math.floor((m + n) / 2);
    }

    let newArr = [];
    let indexOfM = 0, indexOfN = 0, i = 0;
    while (indexOfM < m || indexOfN < n) {
        if (indexOfM === m && indexOfN < n) {
            newArr[i] = nums2[indexOfN];
            indexOfN++;
        } else if (indexOfN === n && indexOfM < m) {
            newArr[i] = nums1[indexOfM];
            indexOfM++;
        } else if (nums1[indexOfM] <= nums2[indexOfN]) {
            newArr[i] = nums1[indexOfM];
            indexOfM++;
        } else {
            newArr[i] = nums2[indexOfN];
            indexOfN++;
        }
        if (i === indexOfMedian) {
            if (carry === 0) {
                return (newArr[i] + newArr[i - 1]) / 2;
            } else {
                return newArr[i];
            }
        }
        i++;
    }
};