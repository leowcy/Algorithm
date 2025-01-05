/**
 * 11. Container with most water
 * Given n non-negative integers a1, a2, ..., an ,
 * where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * Notice that you may not slant the container.
 */

/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function (height) {
    let s = -1,
        left = 0,
        right = height.length - 1;

    while (left < right) {
        let width = right - left;
        let valueOfHeight = Math.min(height[left], height[right]);
        s = Math.max(s, width * valueOfHeight);

        // Key: The higher side -> the bigger possible S will have. So move correspondingly.
        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return s;
};

// daily challenge re-complete 11
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0,
        r = height.length - 1;

    if (l == r) return 0;
    if (Math.abs(l - r) == 1) return Math.min(height[l], height[r]);

    let maxContain = 0;

    while (l < r) {
        let tempContain = Math.min(height[l], height[r]) * (r - l);

        maxContain = tempContain > maxContain ? tempContain : maxContain;

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxContain;
};

// O(n) = n