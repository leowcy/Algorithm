var merge = function (nums1, m, nums2, n) {

    var sum = m + n;
    m--;
    n--;

    while (sum--) {
        if (n < 0 || nums1[m] >= nums2[n]) {
            nums1[sum] = nums1[m--];
        } else {
            nums1[sum] = nums2[n--];
        }
    }

    return nums1;
};