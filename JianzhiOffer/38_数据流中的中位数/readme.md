### 数据流中的中位数

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

示例 1：
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]

示例 2：
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]

## solution 1: sort -> return - simple + brute force + straight forward
- time complexity: O(n) = NlogN - sort
- space complexity: O(n) = N 
- this solution cannot AC -> time complexity too high

## solution 2: binary search
- each time when inserting -> put it into the right spot
- when getting the mid number -> just need O(1) time
- time complexity: O(n) = n -> binary search is logN + move element will need N time -> so it is N
- space complexity: N

## solution 3: Heap
- In JS, this is no Heap data structure. So need to hand-code one.
- MaxHeap - store the small half of the elements
- MinHeap - store the max half of the elements
- this mid number is the MaxHeap.top() or the Max.Heap.top pluse Min.heap.top() divide by 2.
- time complexity: logN
- space complexity: N