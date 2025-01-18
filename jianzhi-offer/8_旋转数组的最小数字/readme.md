### 旋转数组的最小数字
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：
输入：[3,4,5,1,2]
输出：1

## solution 1:
- Binary search -> The first reason of using binary search is that the time complexity is log(n) -> Compare the mid index of the array with the leftest and rightest index's value
    -> if numbers[mid] > numbers[right], then the smallest element will be in the right half `[m + 1, right]` -> if numbers[mid] < numbers[right], then the smallest element will be in the left half `[left, m]` -> The difficult point is when numbers[mid] == numbers[right], the smallest element could be in the left/right section. So what can we do?
    -> We cant simply discard left or right part. We can do is `right = right - 1` -> Reduce the scope -> At the end, when left >= right -> return numbers[left]
- Time Complexity: O(n) = log(n)
- Space Complexity: O(1)