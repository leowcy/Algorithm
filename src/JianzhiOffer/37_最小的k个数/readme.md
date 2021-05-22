### 最小的k个数

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

示例 1：
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

示例 2：
输入：arr = [0,1,2,1], k = 1
输出：[0]

## solution 1: Sort + Print
- sort the array first -> then print the Kth number from the [0, k-1]
- Time Complexity: O(n) = nlogn - nlogn is the time for sorting
- Space Complexity: O(n) = logn - 快排的空间复杂度是Θ(\lgn)，因为快排的实现是递归调用的， 而且每次函数调用中只使用了常数的空间，因此空间复杂度等于递归深度Θ(\lgn)

## solution 2: Heap - good with massive data
- 维护一个最大堆，永远把每一次插入后的最大值放在堆顶，这样易于下次的交换。
- 先把数组前k个值放入堆中，然后从下标k继续开始以此遍历。如果元素小于堆顶元素，取出堆顶元素然后将当前元素插入堆中。如果元素大于堆顶，误操作。
- 时间复杂度： O(n) = nlogK - 对堆的操作时间是logK，需要对n个元素进行操作，所以总的是nlogK
- 空间复杂度： O(n) = K - the size of the heap

## solution 3: Quick sort - Partition
- 利用快排中partition的思维，把比k小的放在前面，把比k大的放在后面，然后把k放在该放的位置，然后index。然后对比index和需要查找的K比较。
- 如果index == K， 刚好找到，直接利用slice返回。
- 如果index < K, 说明前K个元素在[index + 1, right]之间。反之，区间会落在[left, index-1]之间。只需要递归下去。
- TC：O(n) = N - liner time with compare all the element
- SC: O(n) = N - we will need to modify the existing array