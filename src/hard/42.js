/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 */

/**
 * @param {number[]} height
 * @return {number}
 */

/** 4) Two pointers */
// time O(n)
// space O(1)
function trap(height) {
    if (height == null || height.length === 0) return 0;

    let l = 0;
    let r = height.length - 1;

    let lMax = 0;
    let rMax = 0;

    let res = 0;

    while (l < r) {
        lMax = Math.max(lMax, height[l]);
        if (height[l] < lMax) {
            res += lMax - height[l];
        }

        rMax = Math.max(rMax, height[r]);
        if (height[r] < rMax) {
            res += rMax - height[r];
        }

        height[l] < height[r] ? l++ : r--;
    }

    return res;
}

// Calculate each layer -> this method works but Time Limit Exceeded
var trap = function (height) {
    // calculate the highest layer
    const layerOfHeight = Math.max(...height);
    let rainWaterArea = 0;
    for (let i = 1; i <= layerOfHeight; i++) {
        rainWaterArea += calculateAreaOfLayer(height);
        height = updateHeight(height);
    }
    console.log("rainWaterArea: ", rainWaterArea);
    return rainWaterArea;
};

var calculateAreaOfLayer = function (height) {
    let foundFirstNonZero = false, area = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] === 0 && !foundFirstNonZero) continue;
        else {
            foundFirstNonZero = true;
            if (height[i] === 0) area++;
        }
    }
    // for [0,1,0,1,0] -> now the area = 2 but actual is 1 -> need to cut the 0 which does not have right border
    for (let j = height.length - 1; j >= 0; j--) {
        if (height[j] === 0) area--;
        else break;
    }
    return area;
}

var updateHeight = function (height) {
    for (let i = 0; i < height.length; i++) {
        if (height[i] > 0) height[i]--;
    }
    return height;
}