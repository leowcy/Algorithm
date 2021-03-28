### 题目描述
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

## solution 1 - Divide and conquer
- Most importantly -> chose a better starting index -> let's say it starts at the top right corner (it could also be bottom left)
- if smaller -> column -- ; else -> row++
- Then recursively call the function
- Time complexity:  N = max(row, column) -> O(n) = N;
- Space complexity: O(1) -> Reason: using the existing array -> No extra space needed

## solution 2 - Binary search
- Calculate the mid of row and column and compare it with the target value
- if smaller -> move left or up
- if bigger -> move right or down
- Time complexity: O(n) = log(row) * log(column)
- Space complexity: O(1) -> Reason: using the existing array -> No extra space needed