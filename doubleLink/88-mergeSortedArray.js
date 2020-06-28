/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (nums1.length == 0 && nums2.length == 0) return null;
    else if (nums1.length != 0 && nums2.length == 0) return nums1;
    else if (nums1.length == 0 && nums2.length != 0) {
        nums1 = nums2;
        return nums1;
    } else {
        while ( m-1 >= 0 || n-1 >= 0) {
            if (m<1) {

            }
        }
    }

};